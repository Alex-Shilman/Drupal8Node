import React from 'react';
import App from '../containers/App';
import Home from '../components/Home';

export default (store) => {
	return {
		component: App,
		childRoutes: [{
			path: '/',
			component: 'div',
			indexRoute: {
				component: Home
			},
			childRoutes: [
				require('../components/Tasks/route')(store),
				require('../components/Dashboard/route')(store)
			]
		}]
	}
}