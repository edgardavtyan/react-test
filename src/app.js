import { render } from 'react-dom';
import React from 'react';
import Tabs from './js/Tabs';
import TabItem from './js/Tabs/TabItem';
import TabContent from './js/Tabs/TabContent';
import 'file?name=[name].[ext]!./html/index.html';
import './scss/base.scss';
import './scss/components/tabs.scss';

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
		</div>
	},
});

render(<App />, document.getElementById('app'));