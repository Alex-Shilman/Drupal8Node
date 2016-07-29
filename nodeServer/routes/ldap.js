import express from 'express';
import cors from 'cors';
import {
	get_ldap_by_utln
} from '../api';
const router = express.Router();
console.log('we are out of the router');
const routes = () => {
	router.get('/', (req, res, next) => {
		console.log('we are in the router');
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