import React from 'react';

const TabItem = React.createClass({
	render() {
		return <div>{this.props.children}</div>;
	},
});

module.exports = TabItem;
