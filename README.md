```
yarn add callbag-flatten-iter
```

```javascript
const pipe = require("callbag-pipe");
const fromIter = require("callbag-from-iter");
const flattenIter = require("./index");
const forEach = require("callbag-for-each");

pipe(
  fromIter([[10], [20], [30], [40, 50, 60]]),
  flattenIter,
  forEach(i => {
    // called 6 times
  })
);
```

If you're blessed with the [pipeline operator](https://github.com/tc39/proposal-pipeline-operator):

```javascript
fromIter([[10], [20], [30], [40, 50, 60]])
  |> flattenIter
  |> forEach(i => {
    // called 6 times
  });
```

## Learn more

* [Callbag basics](https://github.com/staltz/callbag-basics)
* [Why we need callbags](https://staltz.com/why-we-need-callbags.html), by André Staltz
