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

var atlauncher = require('../index')({
        api_key: process.env.PSP_API_KEY,
        return_full: true
    }),
    assert = require('assert');

atlauncher.psp.packs.all(function (err, res) {
    if (err) {
        return console.log(err);
    }

    assert.equal(false, res.error);

    atlauncher.psp.pack.info(res.data[0].name, function (err, res) {
        if (err) {
            return console.log(err);
        }

        assert.equal(false, res.error);

        atlauncher.psp.pack.version.info(res.data.name, res.data.versions[0].version, function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });
    });
});

atlauncher.psp.packs.public(function (err, res) {
    if (err) {
        return console.log(err);
    }

    assert.equal(false, res.error);
});

atlauncher.psp.packs.semipublic(function (err, res) {
    if (err) {
        return console.log(err);
    }

    assert.equal(false, res.error);
});