var React = require("React");
var DOM = React.DOM;
var ReactDOM = require('React-DOM');

var HelloWorld = React.createClass({
    render: function(){
        return (
            <div id="container">
                <h1>Hello World</h1>
            </div>
        )
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('container'));