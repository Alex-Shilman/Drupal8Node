import express from 'express';
import {
	auth
} from '../api';
const router = express.Router();


module.exports = () => {

	router.get('/auth', auth, (req, res) => {

		if (res.locals.error) {

			res.json({
				error: res.locals.error
			});

		} else {

			req.session.user = res.locals.user;
			console.log(`Hello User->${req.session.user.ldap.name}`)
			console.log('Data from Drupal', JSON.stringify(req.session.user.jwt));
			console.log('Data from Ldap via SnapLogic', req.session.user.ldap);
			res.json({
				success: res.locals.user
			});

		}


	});

	return router;
}