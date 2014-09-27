# bunyan-express-serializer

Serialize *[Express][]-like* request objects.

[express]: http://expressjs.com/

This [Bunyan serializer][] behaves like Bunyan's built-in `req`
serializer, but handles the differences between the *Node core* `req`
object ([http.IncomingMessage][]) and the [*Express* `req`
object][express req object]. **Specifically, it adds logging of
[`req.originalUrl`][req.originalurl]**.

[bunyan serializer]: https://github.com/trentm/node-bunyan#serializers
[http.IncomingMessage]: http://nodejs.org/api/http.html#http_http_incomingmessage
[express req object]: http://expressjs.com/api.html#request
[req.originalUrl]: http://expressjs.com/api.html#req.originalUrl

See [node-bunyan#169][] for motivation.

[node-bunyan#169]: https://github.com/trentm/node-bunyan/pull/169

## Usage

```js
var log = require("bunyan").createLogger({
  serializers: {
    req: require("express-bunyan-serializer"),
  },
});

// ...
log.info({
  req: // Some Express req object with originalUrl
});
```

## Installation

```
npm install express-bunyan-serializer
```
