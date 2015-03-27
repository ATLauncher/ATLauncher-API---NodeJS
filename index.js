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

module.exports = function (apiKey, forceRun) {
    var request = require('request'),
        fs = require('fs'),
        baseUrl = 'https://api.atlauncher.com/',
        version = 'v1',
        forceRun = forceRun || false;

    var makeUrl = function (path) {
        return baseUrl + version + '/' + (path ? path : '');
    };

    // Lets make sure there is a key set before we allow the callback
    var checkKey = function (callback) {
        if (!apiKey) {
            return console.error('An API Key must be set in order to make this request!');
        }

        return callback();
    };

    var makeRequest = function (path, method, data, callback) {
        if (data && !callback) {
            callback = data;
            data = false;
        }

        var options = {
            url: path,
            json: true,
            method: method,
            headers: {
                'User-Agent': 'node/atlauncher-api'
            }
        };

        if (method == 'POST' && data) {
            options.form = data;
        }

        if (apiKey) {
            options.headers['API-KEY'] = apiKey;
        }

        request(options, function (err, req, body) {
            if (!err && body.error && body.code == 401 && body.message == 'API key missing or invalid!') {
                console.error('The API key provided was not valid!');
            }

            if (!err && body && body.code == 429 && !forceRun) {
                // Exceeded API request limit, we must stop now
                throw new Error(body.message);
            }

            return callback(err, body);
        });
    };

    return {
        heartbeat: function (callback) {
            makeRequest(baseUrl, 'GET', callback);
        },
        pack: function (name, version, callback) {
            if (version && !callback) {
                makeRequest(makeUrl('pack/' + name), 'GET', version);
            } else {
                makeRequest(makeUrl('pack/' + name + '/' + version), 'GET', callback);
            }
        },
        packs: {
            simple: function (callback) {
                makeRequest(makeUrl('packs/simple'), 'GET', callback);
            },
            full: {
                all: function (callback) {
                    makeRequest(makeUrl('packs/full/all'), 'GET', callback);
                },
                public: function (callback) {
                    makeRequest(makeUrl('packs/full/public'), 'GET', callback);
                },
                semipublic: function (callback) {
                    makeRequest(makeUrl('packs/full/semipublic'), 'GET', callback);
                },
                private: function (callback) {
                    makeRequest(makeUrl('packs/full/private'), 'GET', callback);
                }
            }
        },
        stats: {
            downloads: {
                all: function (callback) {
                    makeRequest(makeUrl('stats/downloads/all'), 'GET', callback);
                },
                exe: function (callback) {
                    makeRequest(makeUrl('stats/downloads/exe'), 'GET', callback);
                },
                jar: function (callback) {
                    makeRequest(makeUrl('stats/downloads/jar'), 'GET', callback);
                },
                zip: function (callback) {
                    makeRequest(makeUrl('stats/downloads/zip'), 'GET', callback);
                }
            }
        },
        admin: {
            packs: function (callback) {
                checkKey(function () {
                    makeRequest(makeUrl('admin/packs'), 'GET', callback);
                });
            }
        }
    };
};