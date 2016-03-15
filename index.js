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

/* eslint no-console: 0, no-unused-vars: 0 */

'use strict';

const express = require('express');
const    loki = require('lokijs');

const     app = express();
const  server = require('http').Server(app);
const      io = require('socket.io')(server);

const      db = new loki('./data/database.json');

app.use(express.static('public'));

io.on('connection', (socket) => {
	socket.emit('news', { hello: 'world' });

	socket.on('message', (data) => {
		console.log(`${data.sender}: ${data.message}`);

		socket.broadcast.emit('message', data);

		if (data.message === 'hello') {
			io.emit('message', { sender: 'server', message: 'hi' });
		}
	});
});

server.listen(3030, () => {
	console.info('Listening on *:3030');
});
