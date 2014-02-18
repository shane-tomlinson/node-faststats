var assert = require('assert'),
    Stats = require('../faststats').Stats;

var s = new Stats();

s.push(0, 10);
s.shift();
