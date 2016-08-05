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
			console.log('User xxx->', req.session.user);
			res.json({
				success: res.locals.user
			});
		}

	});

	return router;
}