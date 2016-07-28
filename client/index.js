import React from 'react';
import {
	render
} from 'react-dom';
import {
	Router,
	Route,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router';
import {
	Provider
} from 'react-redux';
import configureStore from '../shared/store';
import createRootRoute from '../shared/routes';

let store = configureStore();

render(
	<Provider store={store}>
		<Router history={hashHistory} routes={createRootRoute(store)}></Router>
	</Provider>,
	document.getElementById('App')
);