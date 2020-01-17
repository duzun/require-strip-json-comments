/**
 * Require .json files with comments
 *
 * @license MIT
 * @version 2.0.0
 * @author Dumitru Uzun (DUzun.Me)
 */

const VERSION = '2.0.0';

const fs = require('fs');
const path = require('path');

const stripJsonComments = require('strip-json-comments');

const JSONparse = JSON.parse;

/// Require a JSON file with comments
function requireJSON(filename) {
    if ( path.extname(filename) != '.json' ) filename += '.json';
    try {
        return parse(stripBOM(fs.readFileSync(filename, 'utf8')));
    }
    catch(error) {
        error.message = filename + ": " + error.message;
        throw error;
    }
}

/// Parse a JSON string with comments
function parse(string) {
    return JSONparse.call(JSON, stripJsonComments(string));
}

/// Override require for .json extension
function replace_require() {
    require.extensions['.json'] = function(module, filename) {
        module.exports = requireJSON(filename);
    };
}

/// Override JSON.parse()
function replace_JSON() {
    JSON.parse = parse;

    // Original JSON.parse
    requireJSON._parse = JSONparse;
}

/// Replace build-in JSON parsing methods
function replace() {
    replace_JSON();
    replace_require();
}

/// Exports:

requireJSON.parse           = parse;
requireJSON.replace_require = replace_require;
requireJSON.replace_JSON    = replace_JSON;
requireJSON.replace         = replace;
requireJSON.VERSION         = VERSION;

module.exports = requireJSON;


/// Helpers:

function stripBOM(content) {
    // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
    // because the buffer-to-string conversion in `fs.readFileSync()`
    // translates it to FEFF, the UTF-16 BOM.
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
    }
    return content;
}
