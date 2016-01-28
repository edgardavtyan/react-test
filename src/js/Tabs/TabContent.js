import React from 'react';

const TabContent = React.createClass({
	render() {
		return <div>{this.props.children}</div>;
	},
});

module.exports = TabContent;

