/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
 var str="";
 for(var i=0;i<indices.length;i++)
 {
    str=str+s[indices.indexOf(i)];
 }
 return str;   
}