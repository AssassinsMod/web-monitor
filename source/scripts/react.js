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

/* eslint no-unused-vars: [2, { "varsIgnorePattern": "Graph" }] */

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var Graph = React.createClass({
	render: function() {
		return (
			<div className="graph">example content</div>
		);
	}
});

export function helloworld() {
	ReactDOM.render(
		/* jshint ignore:start */
		<Graph />,
		/* jshint ignore:end */
		document.getElementById('example')
	);
}
