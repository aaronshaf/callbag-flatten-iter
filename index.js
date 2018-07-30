const fromIter = require("callbag-from-iter");
const flatten = require("callbag-flatten");
const map = require("callbag-map");

const flattenIter = source => flatten(map(fromIter)(source));

module.exports = flattenIter;
