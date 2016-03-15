/*!
 *  This file is part of PC-Monitor.
 *
 *  PC-Monitor is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  PC-Monitor is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with PC-Monitor.  If not, see <http://www.gnu.org/licenses/>.
 */

/* eslint no-unused-vars: 0 */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

let ChatInput = React.createClass({
	render: () => (
		<form className="chat-input">
			<input type="text"></input>
			<input type="submit">Send</input>
		</form>
	)
});

let ChatMessage = React.createClass({
	render: () => (
		<li className="chat-message">
			<span className="chat-message-sender">{this.props.author}</span>
			<span className="chat-message-content">{this.props.message}</span>
		</li>
	)
});

let ChatBox = React.createClass({
	render: () => (
		<div className="chatbox">
			<ul className="messages">
				<ChatMessage author="test" message="asd123" />
			</ul>
			<ChatInput />
		</div>
	)
});



export function helloworld() {
	ReactDOM.render(
		<ChatBox />,
		document.getElementById('chatbox')
	);
}
