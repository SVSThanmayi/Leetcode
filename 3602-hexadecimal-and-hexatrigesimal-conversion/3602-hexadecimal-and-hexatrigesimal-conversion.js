/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
    var n1=n*n;
    var n2=n*n*n;
    const str1 = (n1.toString(16)).toUpperCase();
    const str2 = (n2.toString(36)).toUpperCase();
    return str1.concat("",str2);
};