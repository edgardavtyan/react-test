import React from 'react';
import './styles.scss';

module.exports = React.createClass({
	render() {
		return <div>
			<div className="modal__overlay">
				<div className="modal__content">{this.props.children}</div>
			</div>
		</div>;
	},
});
