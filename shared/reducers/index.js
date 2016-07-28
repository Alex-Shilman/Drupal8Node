import {
	AUTH_USER,
	UNAUTH_USER
} from '../actions';

const LdapReducer = (state = {
	authenticated: false,
	error: null
}, action) => {
	switch (action.type) {
		case AUTH_USER:
			debugger;
			return {...state,
				authenticated: true
			}

		case UNAUTH_USER:
			alert(`Something went wrong :( ${JSON.stringify(action.payload)}`);
			return {...state,
				authenticated: false,
				error: action.payload
			}
	}

	return state;
}

export default LdapReducer;