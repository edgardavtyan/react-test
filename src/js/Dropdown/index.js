import React from 'react';
import classnames from 'classnames';

const DropdownList = React.createClass({
	getInitialState() {
		return { 
			isOpen: false,
			items: this.props.children,
			selectedItemIndex: this.props.selectedItemIndex,
		};
	},
	getDefaultProps() {
		return {
			className: 'dropdown',
			titleClass: 'dropdown__title',
			headerClass: 'dropdown__header',
			headerOpenClass: 'dropdown__header--open',
			itemsContainerClass: 'dropdown__children',
			itemClass: 'dropdown__item',
		};
	},
	toggle() {
		this.setState({ isOpen: !this.state.isOpen });
	},
	hide(event) {
		this.setState({ isOpen: false });
	},
	onItemClicked(index) {
		this.setState({ selectedItemIndex: index });
		this.hide();
	},
	style: {
		arrow: { float: 'right' },
		title: { float: 'left', marginRight: '20px' },
		clearfix: { clear: 'both' },
	},
	render() {
		const headerClass = classnames(
			this.props.headerClass,
			{ [this.props.headerOpenClass]: this.state.isOpen });

		return <div className={this.props.className} onBlur={this.hide} tabIndex="100">
			<div className={headerClass} 
			     onClick={this.toggle}>
				<div className={this.props.titleClass}
				     style={this.style.title}>{this.state.items[this.state.selectedItemIndex]}</div>
				<div className={this.props.icon} style={this.style.arrow}>▼</div>
				<div style={this.style.clearfix}></div>
			</div>
			<div className={this.props.itemsContainerClass} 
			     style={{ display: this.state.isOpen ? 'block' : 'none', clear: 'both' }}>
				{this.props.children.map((child, i) => 
					<div className={this.props.itemClass} 
					     onClick={this.onItemClicked.bind(this, i)} key={i}>
					    {child}
					</div>)}
			</div>
		</div>;
	},
});

module.exports = DropdownList;
