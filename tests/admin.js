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

var atlauncher = require('../index')(process.env.API_KEY),
    assert = require('assert');

atlauncher.admin.packs(function (err, res) {
    if (err) {
        return console.log(err);
    }

    assert.equal(false, res.error);
});

if (process.env.PACK_NAME) {
    atlauncher.admin.pack.info(process.env.PACK_NAME, function (err, res) {
        if (err) {
            return console.log(err);
        }

        assert.equal(false, res.error);
    });

    if (process.env.VERSION_NAME) {
        atlauncher.admin.pack.versions.info(process.env.PACK_NAME, process.env.VERSION_NAME, function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });

        atlauncher.admin.pack.versions.xml(process.env.PACK_NAME, process.env.VERSION_NAME, 'a.xml', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });

        atlauncher.admin.pack.versions.json(process.env.PACK_NAME, process.env.VERSION_NAME, 'a.json', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });

        atlauncher.admin.pack.versions.configs(process.env.PACK_NAME, process.env.VERSION_NAME, 'a.zip', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });
    }
}