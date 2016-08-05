import React, {
	Component
} from 'react';
import {
	reduxForm
} from 'redux-form';
import {
	signinUser
} from '../../../actions';
import axios from 'axios';

(process.env.BROWSER) && require('../Task.css');


class Task extends Component {

	state = {
		isLoading: false
	};


	handleFormSubmit(data) {
		data.subject = 'Task Testing';

		return axios.create({
				withCredentials: true
			})
			.post('//dev.ashilm01:3000/snow', data)
			.then(response => {
				console.log('success', response);
			}).catch(err => {
				console.log('error', err);
			});

	}

	render() {
		const {
			data,
			authenticated,
			handleSubmit,
			submitting,
			fields: {
				name,
				prefer_phone,
				address,
				desc
			}
		} = this.props;

		return (
			<div className="at-Task">
				<form 
					className="zoomInRight animated"
					onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
					<fieldset>
						<legend>My Information</legend>
						<div>
							<label>Name</label>
							<input type="text" {...name}/>
						</div>
						<div>
							<label>Phone</label>
							<input type="text" {...prefer_phone}/>
						</div>
						<div>
							<label>Address</label>
							<input type="text" {...address}/>
						</div>
					</fieldset>
					<fieldset>
						<legend>Your Request</legend>
						<div>
							<label>Provide description</label>
							<textarea rows={5} {...desc}></textarea>
						</div>
					</fieldset>
					
					<button 
						action="submit" 
						className="btn btn-primary"
						disabled={submitting}>
						{submitting ? 'Submitting' : 'Submit'}
					</button>
				</form>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	const {
		name,
		bus_phone,
		bus_city,
		utln
	} = state.ldap.data.success.ldap;

	return {
		authenticated: state.ldap.authenticated,
		utln: utln,
		initialValues: {
			name: name,
			prefer_phone: bus_phone,
			address: bus_city
		}
	}
}

module.exports = reduxForm({
		form: 'task',
		fields: ['name', 'prefer_phone', 'address', 'desc']
	},

	mapStateToProps, {
		signinUser: signinUser
	})(Task);