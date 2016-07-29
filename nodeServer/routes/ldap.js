import express from 'express';
import {
	get_ldap_by_utln
} from '../api';
const router = express.Router();

const routes = () => {
	router.get('/', (req, res, next) => {
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



module.exports = routes;