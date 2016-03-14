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

'use strict';

import gulp from 'gulp';

import browserify from 'browserify';
import source from 'vinyl-source-stream';

const opts = {
	entries: ['./scripts/main.js'],
	transform: ['babelify'],
	basedir: './source'
};

module.exports = function() {
	return browserify(opts)
		.bundle()
		.pipe(source('index.js'))
		.pipe(gulp.dest('public'));
};
