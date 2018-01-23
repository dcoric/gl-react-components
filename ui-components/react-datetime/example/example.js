var DateTime = require('../DateTime.js');
// require('./react-datetime.css');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  React.createElement(DateTime, {
	viewMode: 'time',
	timeFormat: 'hh:mm',
	isValidDate: function(current) {
		return current.isAfter(DateTime.moment().startOf('month'));
	},
}),
  document.getElementById('datetime')
);
