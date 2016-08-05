import express from 'express';
import {
	post_snow,
	is_auth
} from '../api';
const router = express.Router();

module.exports = () => {

	router.post('/', is_auth, (req, res) => {

		const payload = {
			...req.body,
			utln: req.session.user.ldap.utln
		}
		console.log('Payload', payload);
		post_snow(payload).then(response => {
			res.json(response);
		}).catch(err => {
			res.json({
				error: `Error!!! ${err}`
			})
		})

	});

	return router;
}