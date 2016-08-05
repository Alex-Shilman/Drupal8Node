module.exports = (store) => {
	return {
		path: 'dashboard',
		getComponent(location, cb) {
			cb(null, require('../components'));
		}
	}
}