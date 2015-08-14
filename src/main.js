var React = require('react');
var Backbone = require('backbone');

// Backbone
var Book = require('./models/book');
var Router = require('./router');

// React
var helloworld = require('./views/helloworld.jsx');

var router = new Router();
router.on("route:hello", function(){
    React.render(
	React.createElement(helloworld, {name: (new Book()).get("title")}),
	document.getElementById('container')
    );
});

Backbone.history.start();
