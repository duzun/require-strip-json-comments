
const fs          = require('fs');
const asert       = require('assert');
const requireJSON = require('..');


// 1.
var config = requireJSON(__dirname + "/config.example");
asert.equal(config.name, 'value', 'yes');
asert.equal(config.unicorn, 'cake');

// 2.
var configStr = fs.readFileSync(__dirname + "/config.example.json", 'utf8');
var config = requireJSON.parse(configStr);
asert.equal(config['one-line'], 'comment 1');
asert.equal(config['multi-line'], 'comment 2');

requireJSON.replace();

// 3.
var config = require("./config.example");
asert.equal(config['one-line'], 'comment 1');
asert.equal(config['multi-line'], 'comment 2');

// 4.
var config = JSON.parse(configStr);
asert.equal(config.name, 'value');
asert.equal(config.unicorn, 'cake');


console.log(config);
