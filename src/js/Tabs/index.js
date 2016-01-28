import classnames from 'classnames';
import React from 'react';
import TabItem from './TabItem';
import TabContent from './TabContent';

module.exports = React.createClass({
	getDefaultProps() {
		return {
			className: 'tabs',
			tabWrapperClass: 'tabs__tab-wrapper',
			tabContainerClass: 'tabs__tab-container',
			tabClass: 'tabs__tab',
			tabActiveClass: 'tabs__tab--active',
			contentWrapperClass: 'tabs__content-wrapper',
			contentClass: 'tabs__content',
			activeTabIndex: '0',
		};
	},
	getInitialState() {
		const children = this.props.children;
		return {
			tabItems: children.filter(child => child.type === TabItem),
			tabContents: children.filter(child => child.type === TabContent),
			activeTabIndex: Number(this.props.activeTabIndex),
		};
	},
	tabClicked(index) {
		this.setState({ activeTabIndex: index });
	},
	render() {
		return <div className={this.props.className}>
			<div className={this.props.tabWrapperClass}>
				<div className={this.props.tabContainerClass}>
					{this.state.tabItems.map((item, i) => 
						<div className={getTabClass(this, i)} key={i} 
					    	 onClick={this.tabClicked.bind(this, i)}>{item}</div>)}
				</div>
			</div>
			<div className={this.props.contentWrapperClass}>
				{this.state.tabContents.map((content, i) =>
					(this.state.activeTabIndex === i)
						? <div className={this.props.contentClass} key={i}>{content}</div>
						: null)}
			</div>
		</div>;
	},
});

function getTabClass(context, tabIndex) {
	return classnames(
		context.props.tabClass, 
		{ [context.props.tabActiveClass]: tabIndex === context.state.activeTabIndex });
}