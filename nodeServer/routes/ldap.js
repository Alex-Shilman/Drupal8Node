import express from 'express';
import {
	get_ldap_by_utln,
	jwt_verify
} from '../api';
const router = express.Router();



module.exports = () => {
	router.get('/', jwt_verify, (req, res, next) => {
		//console.log('JWT_Token ->', res.locals.jwt_message);
		//console.log('JWT', JSON.stringify(req.headers));
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