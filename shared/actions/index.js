export const FETCH_LDAP = 'FETCH_LDAP';
export const STORE_LDAP = 'STORE_LDAP';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
import axios from 'axios';
import {
	hashHistory
} from 'react-router';

export function signinUser(trigger, params, location) {
	return function(dispatch) {

		axios.get('http://localhost:3000/ldap', {
				params
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