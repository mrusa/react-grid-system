'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      _this.setScreenClass();
    }, _this.componentDidMount = function () {
      _this.eventListener = (0, _lodash.throttle)(_this.setScreenClass, 100);
      window.addEventListener('resize', _this.eventListener);
    }, _this.componentWillUnmount = function () {
      window.removeEventListener('resize', _this.eventListener);
    }, _this.setScreenClass = function () {
      _this.setState({ screenClass: (0, _utils.getScreenClass)(_this.context) });
    }, _this.render = function () {
      var style = (0, _style2.default)({
        fluid: _this.props.fluid,
        screenClass: _this.state.screenClass,
        containerWidths: _this.context.containerWidths,
        gutterWidth: _this.context.gutterWidth,
        moreStyle: _this.props.style
      });
      return _react2.default.createElement(
        'div',
        { style: style, className: _this.props.className },
        _this.props.children,
        _react2.default.createElement('span', { style: (0, _style.getAfterStyle)() })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Container;
}(_react2.default.Component);

Container.propTypes = {
  /**
   * Content of the component
   */
  children: _react2.default.PropTypes.node,
  /**
   * True makes the container full-width, false fixed-width
   */
  fluid: _react2.default.PropTypes.bool,
  /**
   * Optional styling
   */
  style: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string])),
  className: _react2.default.PropTypes.string
};
Container.contextTypes = {
  phone: _react2.default.PropTypes.bool,
  tablet: _react2.default.PropTypes.bool,
  breakpoints: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
  containerWidths: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
  gutterWidth: _react2.default.PropTypes.number
};
Container.defaultProps = {
  fluid: false
};
exports.default = Container;