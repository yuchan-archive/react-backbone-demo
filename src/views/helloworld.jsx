var React = require('react');
var Name = React.createClass({
	render: function() {
		return (
			<span>{this.props.name}</span>
		);
	}
});
var HelloWorld = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello, World!</h1>
				<Name name={this.props.name} />
			</div>
		);
	}
});

module.exports = HelloWorld;