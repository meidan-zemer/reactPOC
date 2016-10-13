var React = require('react');
var ReactDom = require('react-dom');
var $ =  require("./lib/jquery/dist/jquery.min.js");
var App = require('./app.jsx');




$.get( "flowcharts.json", function(result){
    ReactDom.render(<App scene={result}/>, document.getElementById('container'));
});

