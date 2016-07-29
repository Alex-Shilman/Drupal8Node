import axios from 'axios';

export const get_ldap_by_utln = (qry) => {
	const {
		ENV,
		TOKEN,
		TASK
	} = process.env;

	console.log('we are in the api');

	return new Promise((resolve, reject) => {
		console.log('we are in the promise', `https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/${ENV}/projects/AccessTufts/${TASK}`);
		axios.post(`https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/${ENV}/projects/AccessTufts/${TASK}`, qry, {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${TOKEN}`
				}
			})
			.then((response) => {
				console.log('we are in success', response);
				resolve(response.data[0]);
			}).catch((response) => {
				console.log('we are in error');
				reject(res, response)
			});
	});
}