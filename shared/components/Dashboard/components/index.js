import React, {
	Component
} from 'react';

(process.env.BROWSER) && require('../Dashboard.css');

class Dashboard extends Component {
	render() {
		return (
			<div className="at-Dashbaord">
				<h2>Dashboard</h2>
				<p>Access Tufts dashbaord...</p>
			</div>
		);
	}
}

module.exports = Dashboard;