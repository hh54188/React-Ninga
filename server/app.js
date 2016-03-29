var express = require('express');
var app = express();

var React = require('react');
var ReactDOM = require('react-dom');

app.get('/', function (req, res) {
	var HelloWorld = React.createClass({
		render: function () {
			ReactDOM.div(null, 'HelloWorld');
		}
	});

	res.send(
		ReactDOM.render(React.createElement(HelloWorld), null, document.querySelector('body'))
	);
});

app.listen(80);