import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router';

(process.env.BROWSER) && require('./Nav.css');

module.exports = class Nav extends Component {
	render() {
		const {
			links
		} = this.props;
		return (
			<ul className="at-Nav">
			{
				links.map(link => {
					return <li key={link}><Link to={link}>{link}</Link></li>
				})
			}
		</ul>

		);
	}
}