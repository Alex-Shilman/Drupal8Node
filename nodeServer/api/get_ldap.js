import axios from 'axios';

export const get_ldap_by_utln = (qry) => {
	const {
		ENV,
		TOKEN,
		TASK
	} = process.env;

	return new Promise((resolve, reject) => {
		axios.post(`https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/${ENV}/projects/AccessTufts/${TASK}`, qry, {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${TOKEN}`
				}
			})
			.then((response) => {
				resolve(response.data[0]);
			}).catch((response) => reject(res, response));
	});
}