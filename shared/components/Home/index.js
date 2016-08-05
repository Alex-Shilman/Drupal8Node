import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import {
	reduxForm
} from 'redux-form';
import {
	authUser
} from '../../actions';
import Nav from '../Nav';


(process.env.BROWSER) && require('./Home.css');

class Home extends Component {
	componentDidMount() {
		this.props.authenticated || this.props.authUser();
	}

	render() {
		const {
			data,
			authenticated,
			fetching
		} = this.props;

		return (
			<div className="at-Home">
				{
					(fetching)
						? 'Loading...'
						: <Nav links={['Task', 'Home', 'Dashboard']}/>
				}
			</div>
		);

	}
}

const mapStateToProps = (state) => {
	return {
		data: state.ldap.data,
		authenticated: state.ldap.authenticated,
		fetching: state.ldap.fetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		authUser
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);