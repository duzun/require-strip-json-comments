# require-strip-json-comments [![Build Status](https://travis-ci.org/duzun/require-strip-json-comments.svg?branch=master)](https://travis-ci.org/duzun/require-strip-json-comments)

Require .json files with comments.

For advanced JSON syntax I recomend using [require-json5](https://www.npmjs.com/package/require-json5),
which can load JSON with trailing commas, unquoted keys, hex numbers, comments, and more.


## Install

```sh
npm i require-strip-json-comments
```

## Usage

1) Load a JSON file which contains comments

```js
var requireJSON = require('require-strip-json-comments');
var config = requireJSON("./config.json");
```

2) Parse a JSON string which contains comments

```js
var requireJSON = require('require-strip-json-comments');
var config = requireJSON.parse('{"name": /*a very important option*/ "value"}');
```

3) Replace `require()`

```js
require('require-strip-json-comments').replace_require();
var config = require("./config");
```

4) Replace `JSON.parse()`

```js
require('require-strip-json-comments').replace_JSON();
var config = JSON.parse('{"name": /*a very important option*/ "value"}');
```

5) Replace `require()` and `JSON.parse()`

```js
require('require-strip-json-comments').replace();
// ...
```
