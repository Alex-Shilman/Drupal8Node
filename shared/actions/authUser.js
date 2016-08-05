export const FETCH_USER = 'FETCH_USER';
export const STORE_LDAP = 'STORE_LDAP';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
import axios from 'axios';
import {
	hashHistory
} from 'react-router';

export const authUser = () => {

	return (dispatch) => {

		const sKey = 'JWT_Token';
		const jwt_token = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + sKey.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || null;

		dispatch({
			type: FETCH_USER
		});

		axios.create({
				withCredentials: true
			}).get('//dev.ashilm01:3000/users/auth', {
				headers: {
					'x-access-token': jwt_token
				}
			})
			.then((response) => {

				dispatch({
					type: AUTH_USER,
					payload: response.data
				});
				dispatch({
					type: STORE_LDAP,
					payload: response.data
				})
				try {
					localStorage.setItem('user_data', JSON.stringify(response.data));
				} catch (err) {
					console.log('error', err);
				}

			}).catch((err) => {
				dispatch({
					type: UNAUTH_USER,
					payload: err
				});
			});

	}
}