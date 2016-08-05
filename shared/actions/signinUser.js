export const FETCH_LDAP = 'FETCH_LDAP';
export const STORE_LDAP = 'STORE_LDAP';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
import axios from 'axios';
import {
	hashHistory
} from 'react-router';

export const signinUser = (trigger, params, location) => {
	return function(dispatch) {
		const sKey = 'JWT_Token';
		const jwt_token = document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + sKey.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1") || null;
		const xhr_instance = axios.create({
			withCredentials: true
		});
		xhr_instance.get('//dev.ashilm01:3000/ldap?', {
				params,
				headers: {
					'x-access-token': jwt_token
				}
			})
			.then((response) => {

				dispatch({
					type: AUTH_USER,
					payload: response
				});
				dispatch({
					type: STORE_LDAP,
					payload: response
				})
				try {
					localStorage.setItem('ldap_data', JSON.stringify(response.data));
				} catch (err) {
					console.log('error', err);
				}
				if ((location) && (location.state) && (location.state.nextPathname)) {
					hashHistory.push(location.state.nextPathname);
				} else {
					hashHistory.push('/services/popular');
				}

			}).catch((err) => {
				dispatch({
					type: UNAUTH_USER,
					payload: err
				});
			});

	}
}