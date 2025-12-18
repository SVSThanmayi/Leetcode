/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = a.length - 1;
    var k = b.length - 1;
    var carry = 0;
    var sum = [];

    while (i >= 0 || k >= 0) {
        var bitA = (i >= 0) ? a[i] - '0' : 0;
        var bitB = (k >= 0) ? b[k] - '0' : 0;
        var total = bitA + bitB + carry;
        sum.push((total % 2).toString());
        carry = Math.floor(total / 2);
        i--;
        k--;
    }
    if (carry === 1)
    {
        sum.push('1');
    }
    return sum.reverse().join('');
};
