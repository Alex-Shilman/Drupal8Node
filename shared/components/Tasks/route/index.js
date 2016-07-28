module.exports = (store) => {
	return {
		path: 'signin',
		getComponent(location, cb) {
			cb(null, require('../components'));
		}
	}
}