/*
 * ATLauncher API - NodeJS - https://github.com/ATLauncher/ATLauncher-API---NodeJS
 * Copyright (C) 2015 ATLauncher
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

console.log('Running public API tests!');
require('./public.js');

if (process.env.API_KEY) {
    console.log('Running admin API tests!');
    require('./admin.js');
}

if (process.env.PSP_API_KEY) {
    console.log('Running PSP API tests!');
    require('./psp.js');
}