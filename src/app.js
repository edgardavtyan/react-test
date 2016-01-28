import { render } from 'react-dom';
import React from 'react';
import Tabs from './js/Tabs';
import TabItem from './js/Tabs/TabItem';
import TabContent from './js/Tabs/TabContent';
import Dropdown from './js/Dropdown';
import 'file?name=[name].[ext]!./html/index.html';
import './scss/base.scss';
import './scss/components/tabs.scss';
import './scss/components/dropdown.scss';

var App = React.createClass({
	render() {
		return <div>
			<Tabs>
				<TabItem>One</TabItem>
				<TabItem>Two</TabItem>
				<TabItem>Three</TabItem>
				<TabItem>Four</TabItem>

				<TabContent>Content One</TabContent>
				<TabContent>Content Two</TabContent>
				<TabContent>Content Three</TabContent>
				<TabContent>Content Four</TabContent>
			</Tabs>

			<div className="wrapper">
				<Dropdown selectedItemIndex="3">
					<div>first</div>
					<div>second</div>
					<div>third</div>
					<div>fourth</div>
					<div>fifth</div>
					<div>sixth</div>
				</Dropdown>
			</div>
		</div>
	},
});

render(<App />, document.getElementById('app'));