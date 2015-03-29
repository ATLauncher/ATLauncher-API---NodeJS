ATLauncher-API---NodeJS
=======================
Node.js module for interacting with the ATLauncher API.

Examples
----
To get started simply require the package and optionally provide an optional object with settings.

```
var api = require('atlauncher-api')({
    api_key: 'my-api-key
});
```

The api_key argument is your API-KEY used for admin or PSP api calls.

For instance for running public api calls such as getting a list of all packs you can use the following:

```
var api = require('atlauncher-api')();

api.packs.full.all(function(err, res) {
    if (err) {
        return console.error(err);
    }

    console.log(res);
});
```

Documentation
----
* [ATLauncher API Docs](http://wiki.atlauncher.com/api:information)