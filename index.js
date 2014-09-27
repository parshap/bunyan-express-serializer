"use strict";

var serialize = require("bunyan").stdSerializers.req;
var copy = require("shallow-copy");

module.exports = function(req) {
  // Start off with Bunyan's built-in req serializer
  var serialized = serialize(req);

  // If originalUrl isn't being used, we don't need to do anything different
  // than the built-in req serializer
  if (req.originalUrl == null || req.url === req.originalUrl) {
    return serialized;
  }

  if (serialized === req) {
    // Don't modify the original object
    serialized = copy(serialized);
  }

  // Use originalUrl instead of url
  serialized.url = req.originalUrl;
  return serialized;
};
