/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    var str1="";
    var str2="";
    for(var i=0;i<word1.length;i++)
    {
        str1+=word1[i];
    }
    for(var i=0;i<word2.length;i++)
    {
        str2+=word2[i];
    }
    if(str1.toLowerCase()===str2.toLowerCase())
    {
        return true;
    }
    return false
}