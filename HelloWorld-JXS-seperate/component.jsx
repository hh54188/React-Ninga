var HelloWorld = React.createClass({
    render: function(){
        return (
            <div id="container">
                <h1>Hello World</h1>
            </div>
        )
    }
});

ReactDOM.render(<HelloWorld />, document.getElementById('app'));