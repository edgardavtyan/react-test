import React from 'react';
import './styles.scss';

module.exports = React.createClass({
	render() {
		const buttonNames = this.props.buttons.split(' ')
			.map(name => name[0].toUpperCase() + name.substr(1).toLowerCase());

		return <div className="dialog-buttons">
			{buttonNames.map(button =>
				<div className="dialog-buttons__button"
				     onClick={this.props[`on${button}`]}>{button}</div>)}
		</div>;
	},
});
