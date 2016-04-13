var express = require('express');
var app = express();

var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body, div = DOM.div;

// var HelloComponent = React.createFactory(require('./component'));
var HelloComponent = require('./component');

    var renderStart = +new Date;
    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        // div({
        //     id: 'content', 
        //     dangerouslySetInnerHTML: {
        //         // __html: ReactDOMServer.renderToString(HelloComponent())
        //         __html: ReactDOMServer.renderToStaticMarkup(React.createElement(HelloComponent))
        //     }
        // });
        
        div(null, DOM.h1({}, "Hello World"), 
            div(null, DOM.h1({}, "Hello World")), 
                div(null, DOM.h1({}, "Hello World")),
                    div(null, DOM.h1({}, "Hello World")),
                        div(null, DOM.h1({}, "Hello World")),
                            div(null, DOM.h1({}, "Hello World")),
                                div(null, DOM.h1({}, "Hello World")),
                                    div(null, DOM.h1({}, "Hello World")),
                                        div(null, DOM.h1({}, "Hello World")),
                                            div(null, DOM.h1({}, "Hello World")),
                                                div(null, DOM.h1({}, "Hello World")),
                                                    div(null, DOM.h1({}, "Hello World")),
                                                        div(null, DOM.h1({}, "Hello World")),
                                                            div(null, DOM.h1({}, "Hello World")),
                                                                div(null, DOM.h1({}, "Hello World")),
                                                                    div(null, DOM.h1({}, "Hello World")),
                                                                        div(null, DOM.h1({}, "Hello World")),
                                                                            div(null, DOM.h1({}, "Hello World")),
                                                                                div(null, DOM.h1({}, "Hello World")),
                                                                                    div(null, DOM.h1({}, "Hello World")))
    ));
    console.log("take===>", (+new Date) - renderStart);


app.get('/', function (req, res) {
    
    var renderStart = +new Date;
    var html = ReactDOMServer.renderToStaticMarkup(body(null,
        // div({
        //     id: 'content', 
        //     dangerouslySetInnerHTML: {
        //         // __html: ReactDOMServer.renderToString(HelloComponent())
        //         __html: ReactDOMServer.renderToStaticMarkup(React.createElement(HelloComponent))
        //     }
        // });
        
        div(null, DOM.h1({}, "Hello World"), div(null, DOM.h1({}, "Hello World")), div(null, DOM.h1({}, "Hello World")))
    ));
    console.log("take===>", (+new Date) - renderStart);

    // 这么做是不对的：页面上显示的是，好好领悟：
    // <h1 data-reactid=".12wv5irlo1s" data-react-checksum="2014908099">HELLO WORLD</h1>
    // var html = ReactDOMServer.renderToStaticMarkup(body(null,
    //     div(null, ReactDOMServer.renderToString(HelloComponent()))
    // ));

    console.log(html);

    res.end(html);
});

app.listen(80);