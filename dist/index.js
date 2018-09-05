'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'button',
    { className: 'btn', onClick: onClick },
    text
  );
};
exports.default = Button;