import jwt from 'jsonwebtoken';
import Promise from 'bluebird';
import {
	get_ldap_by_utln,
	jwt_verify
} from '../api';

export const is_auth = (req, res, next) => {
	console.log('is_auth', req.session.user);
	(req.session && req.session.user) ? next(): next('error: not authenticated user');
}

export const auth = (req, res, next) => {

	const SECRET = 'jwt_secret_key_xxx';
	const jwt_token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];

	if (!jwt_token) {

		res.locals.error = 'No Token';
		return next();
	}

	jwt.verify(jwt_token, SECRET, (err, decoded) => {
		if (err || !decoded) return next(`Token error ${err}`);
		Promise.props({
			jwt: jwt_verify(jwt_token, req.headers.cookie),
			ldap: get_ldap_by_utln({
				utln: decoded.sub.utln
			})
		}).then((result) => {

			if (result.jwt.error) {
				res.locals.error = result.jwt.error;
			} else {
				res.locals.user = result;
			}
			next();
		}).catch((err) => {
			console.log('Error_here', err);
			res.locals.error = err;
			next();
		});
	});
}