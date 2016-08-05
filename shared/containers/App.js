import React, {
	Component
} from 'react';

(process.env.BROWSER) && require('./App.css');

export default class App extends Component {


	render() {
		const {
			children
		} = this.props;
		return (
			<div className="at-App">
				{ children }
			</div>
		);
	}
}