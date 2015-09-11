/**
 * 快速排序算法
 */
var argv = require('optimist').argv;
var count = argv.count || 0;
var arr = count ? [] : argv._;

var swap = function (a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};

for (var k = 0; k < count; k++) {
    var num = parseInt(Math.random() * 100);
    arr.push(num);
}

console.log(arr);

var sort = function (start, end) {
    var flag = start;
    var i = start, j = end;
    while (i !== j) {
        while (arr[j] >= arr[flag] && j > i) {
            j--;
        }
        swap(j, flag);
        flag = j;
        while(arr[i] <= arr[flag] && i < j) {
            i++;
        }
        swap(i, flag);
        flag = i;
    }
    if (start <= flag - 1) {
        sort(start, flag - 1);
    }
    if (end >= flag + 1) {
        sort(flag + 1, end);
    }
}

sort(0, arr.length - 1);
console.log(arr);
