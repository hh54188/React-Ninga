var React = require('react');
var DOM = React.DOM;

module.exports = React.createClass({
	render: function(){
		return DOM.h1(null, 'HELLO WORLD');
    }
})

// module.exports = React.createClass({
// 	render: function(){
// 		return <h1>Hello WORLD</h1>;
//     }
// })