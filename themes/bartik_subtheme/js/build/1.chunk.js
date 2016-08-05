webpackJsonp([1,2],{

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reduxForm = __webpack_require__(257);
	
	var _actions = __webpack_require__(303);
	
	var _axios = __webpack_require__(305);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	(true) && __webpack_require__(339);
	
	var Task = function (_Component) {
		_inherits(Task, _Component);
	
		function Task() {
			var _Object$getPrototypeO;
	
			var _temp, _this, _ret;
	
			_classCallCheck(this, Task);
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Task)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
				isLoading: false
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}
	
		_createClass(Task, [{
			key: 'handleFormSubmit',
			value: function handleFormSubmit(data) {
				data.subject = 'Task Testing';
	
				return _axios2.default.create({
					withCredentials: true
				}).post('//dev.ashilm01:3000/snow', data).then(function (response) {
					console.log('success', response);
				}).catch(function (err) {
					console.log('error', err);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var data = _props.data;
				var authenticated = _props.authenticated;
				var handleSubmit = _props.handleSubmit;
				var submitting = _props.submitting;
				var _props$fields = _props.fields;
				var name = _props$fields.name;
				var prefer_phone = _props$fields.prefer_phone;
				var address = _props$fields.address;
				var desc = _props$fields.desc;
	
	
				return _react2.default.createElement(
					'div',
					{ className: 'at-Task' },
					_react2.default.createElement(
						'form',
						{
							className: 'zoomInRight animated',
							onSubmit: handleSubmit(this.handleFormSubmit.bind(this)) },
						_react2.default.createElement(
							'fieldset',
							null,
							_react2.default.createElement(
								'legend',
								null,
								'My Information'
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'label',
									null,
									'Name'
								),
								_react2.default.createElement('input', _extends({ type: 'text' }, name))
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'label',
									null,
									'Phone'
								),
								_react2.default.createElement('input', _extends({ type: 'text' }, prefer_phone))
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'label',
									null,
									'Address'
								),
								_react2.default.createElement('input', _extends({ type: 'text' }, address))
							)
						),
						_react2.default.createElement(
							'fieldset',
							null,
							_react2.default.createElement(
								'legend',
								null,
								'Your Request'
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'label',
									null,
									'Provide description'
								),
								_react2.default.createElement('textarea', _extends({ rows: 5 }, desc))
							)
						),
						_react2.default.createElement(
							'button',
							{
								action: 'submit',
								className: 'btn btn-primary',
								disabled: submitting },
							submitting ? 'Submitting' : 'Submit'
						)
					)
				);
			}
		}]);
	
		return Task;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		var _state$ldap$data$succ = state.ldap.data.success.ldap;
		var name = _state$ldap$data$succ.name;
		var bus_phone = _state$ldap$data$succ.bus_phone;
		var bus_city = _state$ldap$data$succ.bus_city;
		var utln = _state$ldap$data$succ.utln;
	
	
		return {
			authenticated: state.ldap.authenticated,
			utln: utln,
			initialValues: {
				name: name,
				prefer_phone: bus_phone,
				address: bus_city
			}
		};
	};
	
	module.exports = (0, _reduxForm.reduxForm)({
		form: 'task',
		fields: ['name', 'prefer_phone', 'address', 'desc']
	}, mapStateToProps, {
		signinUser: _actions.signinUser
	})(Task);

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(340);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(330)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./Task.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./Task.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(329)();
	// imports
	
	
	// module
	exports.push([module.id, ".at-Task {\n\t//border:5px solid yellow;\n}\n.at-Task form{\n\twidth: 500px;\n}\n\n.at-Task fieldset{\n\tborder:0;\n}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29tcG9uZW50cy9UYXNrcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb21wb25lbnRzL1Rhc2tzL1Rhc2suY3NzPzUxZjgiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbXBvbmVudHMvVGFza3MvVGFzay5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUdBOztBQUdBOztBQUdBOzs7Ozs7Ozs7Ozs7QUFFQyxPQUFELElBQXlCLG9CQUFRLEdBQVIsQ0FBekI7O0tBR00sSTs7Ozs7Ozs7Ozs7Ozs7aU1BRUwsSyxHQUFRO0FBQ1AsZUFBVztBQURKLEk7Ozs7O29DQUtTLEksRUFBTTtBQUN0QixTQUFLLE9BQUwsR0FBZSxjQUFmOztBQUVBLFdBQU8sZ0JBQU0sTUFBTixDQUFhO0FBQ2xCLHNCQUFpQjtBQURDLEtBQWIsRUFHTCxJQUhLLENBR0EsMEJBSEEsRUFHNEIsSUFINUIsRUFJTCxJQUpLLENBSUEsb0JBQVk7QUFDakIsYUFBUSxHQUFSLENBQVksU0FBWixFQUF1QixRQUF2QjtBQUNBLEtBTkssRUFNSCxLQU5HLENBTUcsZUFBTztBQUNmLGFBQVEsR0FBUixDQUFZLE9BQVosRUFBcUIsR0FBckI7QUFDQSxLQVJLLENBQVA7QUFVQTs7OzRCQUVRO0FBQUEsaUJBWUosS0FBSyxLQVpEO0FBQUEsUUFFUCxJQUZPLFVBRVAsSUFGTztBQUFBLFFBR1AsYUFITyxVQUdQLGFBSE87QUFBQSxRQUlQLFlBSk8sVUFJUCxZQUpPO0FBQUEsUUFLUCxVQUxPLFVBS1AsVUFMTztBQUFBLCtCQU1QLE1BTk87QUFBQSxRQU9OLElBUE0saUJBT04sSUFQTTtBQUFBLFFBUU4sWUFSTSxpQkFRTixZQVJNO0FBQUEsUUFTTixPQVRNLGlCQVNOLE9BVE07QUFBQSxRQVVOLElBVk0saUJBVU4sSUFWTTs7O0FBY1IsV0FDQztBQUFBO0FBQUEsT0FBSyxXQUFVLFNBQWY7QUFDQztBQUFBO0FBQUE7QUFDQyxrQkFBVSxzQkFEWDtBQUVDLGlCQUFVLGFBQWEsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQUFiLENBRlg7QUFHQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREQ7QUFFQywwREFBTyxNQUFLLE1BQVosSUFBdUIsSUFBdkI7QUFGRCxRQUZEO0FBTUM7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUREO0FBRUMsMERBQU8sTUFBSyxNQUFaLElBQXVCLFlBQXZCO0FBRkQsUUFORDtBQVVDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERDtBQUVDLDBEQUFPLE1BQUssTUFBWixJQUF1QixPQUF2QjtBQUZEO0FBVkQsT0FIRDtBQWtCQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREQ7QUFFQyw2REFBVSxNQUFNLENBQWhCLElBQXVCLElBQXZCO0FBRkQ7QUFGRCxPQWxCRDtBQTBCQztBQUFBO0FBQUE7QUFDQyxnQkFBTyxRQURSO0FBRUMsbUJBQVUsaUJBRlg7QUFHQyxrQkFBVSxVQUhYO0FBSUUsb0JBQWEsWUFBYixHQUE0QjtBQUo5QjtBQTFCRDtBQURELEtBREQ7QUFzQ0E7Ozs7OztBQUdGLEtBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFXO0FBQUEsOEJBTTlCLE1BQU0sSUFBTixDQUFXLElBQVgsQ0FBZ0IsT0FBaEIsQ0FBd0IsSUFOTTtBQUFBLE1BRWpDLElBRmlDLHlCQUVqQyxJQUZpQztBQUFBLE1BR2pDLFNBSGlDLHlCQUdqQyxTQUhpQztBQUFBLE1BSWpDLFFBSmlDLHlCQUlqQyxRQUppQztBQUFBLE1BS2pDLElBTGlDLHlCQUtqQyxJQUxpQzs7O0FBUWxDLFNBQU87QUFDTixrQkFBZSxNQUFNLElBQU4sQ0FBVyxhQURwQjtBQUVOLFNBQU0sSUFGQTtBQUdOLGtCQUFlO0FBQ2QsVUFBTSxJQURRO0FBRWQsa0JBQWMsU0FGQTtBQUdkLGFBQVM7QUFISztBQUhULEdBQVA7QUFTQSxFQWpCRDs7QUFtQkEsUUFBTyxPQUFQLEdBQWlCLDBCQUFVO0FBQ3pCLFFBQU0sTUFEbUI7QUFFekIsVUFBUSxDQUFDLE1BQUQsRUFBUyxjQUFULEVBQXlCLFNBQXpCLEVBQW9DLE1BQXBDO0FBRmlCLEVBQVYsRUFLaEIsZUFMZ0IsRUFLQztBQUNoQjtBQURnQixFQUxELEVBT2IsSUFQYSxDQUFqQixDOzs7Ozs7O0FDOUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsaUNBQWdDLFVBQVUsRUFBRTtBQUM1QyxFOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EscUNBQW9DLDhCQUE4QixHQUFHLGdCQUFnQixpQkFBaUIsR0FBRyxzQkFBc0IsYUFBYSxHQUFHOztBQUUvSSIsImZpbGUiOiIxLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG5cdENvbXBvbmVudFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRyZWR1eEZvcm1cbn0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQge1xuXHRzaWduaW5Vc2VyXG59IGZyb20gJy4uLy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuKHByb2Nlc3MuZW52LkJST1dTRVIpICYmIHJlcXVpcmUoJy4uL1Rhc2suY3NzJyk7XG5cblxuY2xhc3MgVGFzayBleHRlbmRzIENvbXBvbmVudCB7XG5cblx0c3RhdGUgPSB7XG5cdFx0aXNMb2FkaW5nOiBmYWxzZVxuXHR9O1xuXG5cblx0aGFuZGxlRm9ybVN1Ym1pdChkYXRhKSB7XG5cdFx0ZGF0YS5zdWJqZWN0ID0gJ1Rhc2sgVGVzdGluZyc7XG5cblx0XHRyZXR1cm4gYXhpb3MuY3JlYXRlKHtcblx0XHRcdFx0d2l0aENyZWRlbnRpYWxzOiB0cnVlXG5cdFx0XHR9KVxuXHRcdFx0LnBvc3QoJy8vZGV2LmFzaGlsbTAxOjMwMDAvc25vdycsIGRhdGEpXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzJywgcmVzcG9uc2UpO1xuXHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2Vycm9yJywgZXJyKTtcblx0XHRcdH0pO1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0ZGF0YSxcblx0XHRcdGF1dGhlbnRpY2F0ZWQsXG5cdFx0XHRoYW5kbGVTdWJtaXQsXG5cdFx0XHRzdWJtaXR0aW5nLFxuXHRcdFx0ZmllbGRzOiB7XG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdHByZWZlcl9waG9uZSxcblx0XHRcdFx0YWRkcmVzcyxcblx0XHRcdFx0ZGVzY1xuXHRcdFx0fVxuXHRcdH0gPSB0aGlzLnByb3BzO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXQtVGFza1wiPlxuXHRcdFx0XHQ8Zm9ybSBcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJ6b29tSW5SaWdodCBhbmltYXRlZFwiXG5cdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdCh0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKSl9PlxuXHRcdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdDxsZWdlbmQ+TXkgSW5mb3JtYXRpb248L2xlZ2VuZD5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbD5OYW1lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLm5hbWV9Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPlBob25lPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgey4uLnByZWZlcl9waG9uZX0vPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+QWRkcmVzczwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHsuLi5hZGRyZXNzfS8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2ZpZWxkc2V0PlxuXHRcdFx0XHRcdDxmaWVsZHNldD5cblx0XHRcdFx0XHRcdDxsZWdlbmQ+WW91ciBSZXF1ZXN0PC9sZWdlbmQ+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWw+UHJvdmlkZSBkZXNjcmlwdGlvbjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0YXJlYSByb3dzPXs1fSB7Li4uZGVzY30+PC90ZXh0YXJlYT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PGJ1dHRvbiBcblx0XHRcdFx0XHRcdGFjdGlvbj1cInN1Ym1pdFwiIFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdWJtaXR0aW5nfT5cblx0XHRcdFx0XHRcdHtzdWJtaXR0aW5nID8gJ1N1Ym1pdHRpbmcnIDogJ1N1Ym1pdCd9XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZm9ybT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0bmFtZSxcblx0XHRidXNfcGhvbmUsXG5cdFx0YnVzX2NpdHksXG5cdFx0dXRsblxuXHR9ID0gc3RhdGUubGRhcC5kYXRhLnN1Y2Nlc3MubGRhcDtcblxuXHRyZXR1cm4ge1xuXHRcdGF1dGhlbnRpY2F0ZWQ6IHN0YXRlLmxkYXAuYXV0aGVudGljYXRlZCxcblx0XHR1dGxuOiB1dGxuLFxuXHRcdGluaXRpYWxWYWx1ZXM6IHtcblx0XHRcdG5hbWU6IG5hbWUsXG5cdFx0XHRwcmVmZXJfcGhvbmU6IGJ1c19waG9uZSxcblx0XHRcdGFkZHJlc3M6IGJ1c19jaXR5XG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhGb3JtKHtcblx0XHRmb3JtOiAndGFzaycsXG5cdFx0ZmllbGRzOiBbJ25hbWUnLCAncHJlZmVyX3Bob25lJywgJ2FkZHJlc3MnLCAnZGVzYyddXG5cdH0sXG5cblx0bWFwU3RhdGVUb1Byb3BzLCB7XG5cdFx0c2lnbmluVXNlcjogc2lnbmluVXNlclxuXHR9KShUYXNrKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NoYXJlZC9jb21wb25lbnRzL1Rhc2tzL2NvbXBvbmVudHMvaW5kZXguanNcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vVGFzay5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2F1dG9wcmVmaXhlci1sb2FkZXIvaW5kZXguanMhLi9UYXNrLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hdXRvcHJlZml4ZXItbG9hZGVyL2luZGV4LmpzIS4vVGFzay5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zaGFyZWQvY29tcG9uZW50cy9UYXNrcy9UYXNrLmNzc1xuICoqIG1vZHVsZSBpZCA9IDMzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAxXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYXQtVGFzayB7XFxuXFx0Ly9ib3JkZXI6NXB4IHNvbGlkIHllbGxvdztcXG59XFxuLmF0LVRhc2sgZm9ybXtcXG5cXHR3aWR0aDogNTAwcHg7XFxufVxcblxcbi5hdC1UYXNrIGZpZWxkc2V0e1xcblxcdGJvcmRlcjowO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyIS4vfi9hdXRvcHJlZml4ZXItbG9hZGVyIS4vc2hhcmVkL2NvbXBvbmVudHMvVGFza3MvVGFzay5jc3NcbiAqKiBtb2R1bGUgaWQgPSAzNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=