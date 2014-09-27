"use strict";

var test = require("tape");
var serialize = require("./");

test("serialize mock object", function(t) {
  t.equal(serialize({
    url: "/",
    originalUrl: "/foo",
  }).url, "/foo");
  t.end();
});

