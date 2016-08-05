import axios from 'axios';

export const post_snow = (payload) => {
	console.log('payload', payload)
	const {
		SNAPLGK_ENV,
		SNOW_TOKEN,
		SNOW_TASK
	} = process.env;

	return new Promise((resolve, reject) => {
		!(SNAPLGK_ENV && SNOW_TOKEN && SNOW_TASK) && reject('missing required params');
		axios.post(`https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/${SNAPLGK_ENV}/projects/AccessTufts/${SNOW_TASK}`, payload, {
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${SNOW_TOKEN}`
				}
			})
			.then((response) => {
				console.log('success', response);
				resolve(response.data[0]);
			}).catch((err) => {
				console.log('we are in error', err.data);
				reject(err)
			});
	});
}