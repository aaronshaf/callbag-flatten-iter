const test = require("tape");
const fromIter = require("callbag-from-iter");
const pipe = require("callbag-pipe");
const forEach = require("callbag-for-each");
const flattenIter = require("./index");

test("flattens an array", t => {
  t.plan(6);
  pipe(
    fromIter([[10], [20], [30], [40, 50, 60]]),
    flattenIter,
    forEach(i => {
      t.ok(typeof i === "number");
    })
  );
});
