# require-strip-json-comments

Require .json files with comments

## Install

```sh
npm i require-strip-json-comments
```

## Usage

1. Load a JSON file which contains comments

```js
var requireJSON = require('require-strip-json-comments');
var config = requireJSON("./config.json");
```

2. Parse a JSON string which contains comments

```js
var requireJSON = require('require-strip-json-comments');
var config = requireJSON.parse('{"name": /*a very important option*/ "value"}');
```

3. Replace `require()`

```js
require('require-strip-json-comments').replace_require();
var config = require("./config");
```

4. Replace `JSON.parse()`

```js
require('require-strip-json-comments').replace_JSON();
var config = JSON.parse('{"name": /*a very important option*/ "value"}');
```

5. Replace `require()` and `JSON.parse()`

```js
require('require-strip-json-comments').replace();
// ...
```

