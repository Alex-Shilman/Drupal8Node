import {
	AUTH_USER,
	UNAUTH_USER,
	FETCH_USER
} from '../actions';

const LdapReducer = (state = {
	authenticated: false,
	fetching: false,
	error: null
}, action) => {
	switch (action.type) {
		case AUTH_USER:

			return {...state,
				authenticated: true,
				fetching: false,
				data: action.payload

			}

		case FETCH_USER:
			return {
				...state,
				fetching: true
			}

		case UNAUTH_USER:
			alert(`Something went wrong :( ${JSON.stringify(action.payload)}`);
			return {...state,
				authenticated: false,
				fetching: false,
				error: action.payload
			}
	}

	return state;
}

export default LdapReducer;