import axios from 'axios';


export const jwt_verify = (jwt, D8cookie) => {

	return new Promise((resolve, reject) => {
		axios.create({
			withCredentials: true
		}).get(`http://dev.ashilm01:8088/my_jwt/verify?token=${jwt}`, {
			headers: {
				'Cookie': D8cookie
			}
		}).then((response) => {
			console.log('--------TOKEN IS GOOD--------');
			resolve(response.data);
		}).catch((err) => {
			console.log('error jwt_verify');
			reject(err);
		});
	});
}