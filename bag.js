/**
 * 背包问题
 */
var argv = require('optimist').argv;
var w = argv.w;
var n = argv.n;
var v = argv._;
var pack = [];

if (v.length !== n) return;

for(var i = 0; i < n - 1; i++) {
    for(var j = w; j > v[i];) {
        if (pack[j - v[i]]) {
            pack[j] = true;
        }
    }
}

console.log(pack);
