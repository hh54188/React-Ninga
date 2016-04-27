var React = require("React");
var DOM = React.DOM;
var ReactDOM = require('React-DOM');

// React Component
var HelloComponent = require("./HelloComponent");
// Origin React Component
var greeter = require('./Greeter.js'); 

ReactDOM.render(React.createElement(HelloComponent), document.querySelector("#container"));
document.getElementById('contaienr').appendChild(greeter());