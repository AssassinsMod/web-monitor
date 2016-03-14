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

/* eslint no-console: 0 */

'use strict';

const express = require('express');
const loki = require('lokijs');

const api = express();
const web = express();

const db = new loki('./data/database.json');
let tests = db.addCollection('tests');

/* Front-end */
web.listen(3030, () => {
	web.use(express.static('public'));
	console.info('Web Server running on *:3030');
});

/* Back-end */
const router = express.Router();

router.get('/', (req, res) => {
	console.info('Sending db');
	res.json(tests.data);
});

router.post('/:name', (req, res) => {
	console.info(`Addind test "${req.params.name}"`);
	tests.insert({ name: req.params.name });
	res.json(tests.find({ name: req.params.name }));
});




api.use('/api', router);
api.listen(3031);
