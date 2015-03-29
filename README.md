ATLauncher-API---NodeJS
=======================
Node.js module for interacting with the ATLauncher API.

Getting Started
----
To get started simply require the package and optionally provide an optional object with settings.

```
var api = require('atlauncher-api')({
    api_key: 'my-api-key
});
```

The api_key argument is your API-KEY used for admin or PSP api calls.

All the arguments you can pass in are below:

```
{
    base_url: 'https://api.atlauncher.com/', # The base url of the api
    api_version: 'v1', # A string representing the verison to be used in URLS
    api_key: false, # The API key for authenticated requests/higher rate limits
    return_full: false # If the returns from each callback should contain all the data from the response or just the data attribute of the response
}
```

Examples
----

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

Or to get the entire return from the API and not just the data:

```
var api = require('atlauncher-api')({
    return_full: true
});

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