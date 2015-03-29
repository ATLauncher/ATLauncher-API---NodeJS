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
        api_key: process.env.API_KEY
    }),
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

    if (process.env.FOLDER_NAME) {
        atlauncher.admin.pack.files(process.env.PACK_NAME, process.env.FOLDER_NAME, function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });

        if (process.env.FILE_NAME) {
            atlauncher.admin.pack.file.download(process.env.PACK_NAME, process.env.FOLDER_NAME, process.env.FILE_NAME, 'tests/files/a.jar', function (err, res) {
                if (err) {
                    return console.log(err);
                }

                assert.equal('Saved to tests/files/a.jar!', res);

                atlauncher.admin.pack.file.delete(process.env.PACK_NAME, process.env.FOLDER_NAME, process.env.FILE_NAME, function (err, res) {
                    if (err) {
                        return console.log(err);
                    }

                    assert.equal(false, res.error);

                    atlauncher.admin.pack.file.put(process.env.PACK_NAME, process.env.FOLDER_NAME, process.env.FILE_NAME, 'tests/files/a.jar', function (err, res) {
                        if (err) {
                            return console.log(err);
                        }

                        assert.equal(false, res.error);
                    });
                });
            });
        }
    }

    atlauncher.admin.pack.settings.allowedplayers.delete(process.env.PACK_NAME, function (err, res) {
        if (err) {
            return console.log(err);
        }

        assert.equal(false, res.error);

        atlauncher.admin.pack.settings.allowedplayers.add(process.env.PACK_NAME, ['ryan1', 'ryan2'], function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);

            atlauncher.admin.pack.settings.allowedplayers.delete(process.env.PACK_NAME, ['ryan1'], function (err, res) {
                if (err) {
                    return console.log(err);
                }

                assert.equal(false, res.error);

                atlauncher.admin.pack.settings.allowedplayers.get(process.env.PACK_NAME, function (err, res) {
                    if (err) {
                        return console.log(err);
                    }

                    assert.equal(false, res.error);

                    assert.deepEqual(['ryan2'], res.data);
                });
            });
        });
    });

    atlauncher.admin.pack.settings.testers.delete(process.env.PACK_NAME, function (err, res) {
        if (err) {
            return console.log(err);
        }

        assert.equal(false, res.error);

        atlauncher.admin.pack.settings.testers.add(process.env.PACK_NAME, ['ryan1', 'ryan2'], function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);

            atlauncher.admin.pack.settings.testers.delete(process.env.PACK_NAME, ['ryan1'], function (err, res) {
                if (err) {
                    return console.log(err);
                }

                assert.equal(false, res.error);

                atlauncher.admin.pack.settings.testers.get(process.env.PACK_NAME, function (err, res) {
                    if (err) {
                        return console.log(err);
                    }

                    assert.equal(false, res.error);

                    assert.deepEqual(['ryan2'], res.data);
                });
            });
        });
    });

    if (process.env.VERSION_NAME) {
        atlauncher.admin.pack.version.info(process.env.PACK_NAME, process.env.VERSION_NAME, function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });

        atlauncher.admin.pack.version.xml.get(process.env.PACK_NAME, process.env.VERSION_NAME, 'tests/files/a.xml', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal('Saved to tests/files/a.xml!', res);
        });

        atlauncher.admin.pack.version.xml.put(process.env.PACK_NAME, process.env.VERSION_NAME, 'tests/files/a.xml', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });

        atlauncher.admin.pack.version.json.get(process.env.PACK_NAME, process.env.VERSION_NAME, 'tests/files/a.json', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal('Saved to tests/files/a.json!', res);
        });

        atlauncher.admin.pack.version.configs.get(process.env.PACK_NAME, process.env.VERSION_NAME, 'tests/files/a.zip', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal('Saved to tests/files/a.zip!', res);
        });

        atlauncher.admin.pack.version.configs.put(process.env.PACK_NAME, process.env.VERSION_NAME, 'tests/files/a.zip', function (err, res) {
            if (err) {
                return console.log(err);
            }

            assert.equal(false, res.error);
        });
    }
}