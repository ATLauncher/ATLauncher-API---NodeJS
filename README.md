ATLauncher-API---NodeJS
=======================
Node.js module for interacting with the ATLauncher API.

Examples
----
To get started simply require the package and optionally provide the arguments it needs.

```
var api = require('atlauncher-api')(API_KEY, FORCE);
```

The API_KEY argument is your API-KEY used for admin or PSP api calls.

The FORCE argument is a boolean (true/false) if we should ignore breaking api calls. For instance when you're about to reach your request limit and get IP banned the force option will allow you to bypass the exception which gets thrown halting execution.

For instance for running public api calls such as getting a list of all packs you can use the following:

```
var api = require('atlauncher-api')();

api.packs.full.all(function(err, res) {
    if (err) {
        return console.error(err);
    }

    console.log(res.data);
});
```

Documentation
----
* [ATLauncher API Docs](http://wiki.atlauncher.com/api:information)