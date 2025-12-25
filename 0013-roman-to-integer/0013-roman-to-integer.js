/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = new Map([
        ["I",1],
        ["V",5],
        ["X",10],
        ["L",50],
        ["C",100],
        ["D",500],
        ["M",1000]
    ]);

    var sum = 0;

    for (var i = 0; i < s.length; i++) {
        if (i < s.length - 1 && values.get(s[i]) < values.get(s[i+1])) {
            sum -= values.get(s[i]);
        } else {
            sum += values.get(s[i]);
        }
    }
    return sum;
};
