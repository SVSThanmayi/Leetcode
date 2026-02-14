/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function (n) {
    var key, value;
    var pairs = {};
    var str = String(n);
    for (var i = 0; i < str.length; i++) {
        key = str[i];
        if (pairs[key] != undefined) {
            pairs[key]++;
        }
        else {
            pairs[key] = 1;
        }
    }
    var least = 0;
    var min = 10000;
    for (var key in pairs) {
        if (min > pairs[key]) {
            min = pairs[key];
            least = key;
        }
    }
    return Number(least);
};