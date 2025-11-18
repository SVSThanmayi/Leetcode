/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim();
    // var count=0;
    // for(var i=trimS.length-1;trimS[i]!=" ";i--)
    // {
    //     count++;
    // }
    // return count;
    s=s.split(" ");
    return s[s.length-1].length;
};