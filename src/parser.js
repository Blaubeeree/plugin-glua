"use strict";
const gluaparse = require("gluaparse");

function parse(text, parsers, options) {
  return gluaparse.parse(text, {
    ranges: true,
    luaVersion: "5.1",
  });
}

module.exports = parse;
