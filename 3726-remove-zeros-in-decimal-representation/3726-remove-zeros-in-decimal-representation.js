/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
   var str=String(n);
   var newstr=str.replaceAll('0','')
   return Number(newstr) ;
};