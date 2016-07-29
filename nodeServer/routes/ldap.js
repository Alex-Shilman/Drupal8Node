import express from 'express';
import jwt from 'jsonwebtoken';
import {
	get_ldap_by_utln
} from '../api';
const router = express.Router();
const SECRET = 'jwt_secret_key_xxx';

const JWT_verify = (req, res, next) => {
	console.log('Inside getjwt');
	const jwt_token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
	//const jwt_decoded = jwt.verify(jwt_token, SECRET);
	jwt.verify(jwt_token, SECRET, (err, decoded) => {
		if (err) next('No Access');
		res.locals.jwt_message = decoded.message;
		next();
	});
}

module.exports = () => {
	router.get('/', JWT_verify, (req, res, next) => {
		console.log('JWT_Token ->', res.locals.jwt_token);
		console.log('JWT', JSON.stringify(req.headers));
		get_ldap_by_utln(req.query).then(response => {
			res.json(response);
		}).catch(err => {
			res.json({
				error: `Error!!! ${err} `
			});
		});
	});

	return router;
}