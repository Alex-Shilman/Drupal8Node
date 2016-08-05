import axios from 'axios';

export const get_ldap_by_utln = (qry) => {
	const {
		SNAPLGK_ENV,
		LDAP_TOKEN,
		LDAP_TASK
	} = process.env;


	return new Promise((resolve, reject) => {
		!(SNAPLGK_ENV && LDAP_TOKEN && LDAP_TASK) && reject('missing required params');
		axios.post(`https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/${SNAPLGK_ENV}/projects/AccessTufts/${LDAP_TASK}`, qry, {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${LDAP_TOKEN}`
				}
			})
			.then((response) => {
				resolve(response.data[0]);
			}).catch((err) => {
				console.log('we are in error', err.data);
				reject(err)
			});
	});
}