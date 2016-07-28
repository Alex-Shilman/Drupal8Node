import React, {
	Component
} from 'react';
import {
	reduxForm
} from 'redux-form';
import {
	signinUser
} from '../../../actions';

(process.env.BROWSER) && require('./style.css');


class Signin extends Component {

	state = {
		isLoading: false
	};


	handleFormSubmit(params) {
		const {
			location
		} = this.props;
		this.setState({
			isLoading: true
		});
		this.props.signinUser('get_ldap_info', params, location);
	}

	render() {
		const {
			handleSubmit,
			submitting,
			fields: {
				utln,
				password
			}
		} = this.props;
		return (
			<div className="at-Signin">
				<form 
					className="zoomInRight animated"
					onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<fieldset className="form-group">
						<label>Tufts Username:</label>
						<input type="text" { ...utln } className="form-control"/>
					</fieldset>
					<fieldset className="form-group">
						<label>Tufts Password:</label>
						<input type="password" { ...password } className="form-control"/>
					</fieldset>
					<button 
						action="submit" 
						className="btn btn-primary">
						Sign in
					</button>
				</form>
				{(this.state.isLoading) ? <div>Loading...</div> : null}
			</div>

		)
	}
}

module.exports = reduxForm({
	form: 'signin',
	fields: ['utln', 'password']
}, null, {
	signinUser: signinUser
})(Signin);