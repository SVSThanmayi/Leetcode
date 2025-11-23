/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var x=0,i=0;
    var merge="";
    var len=word2.length+word1.length;
    while(x<len)
    {
        if(i<word1.length)
        merge+=word1[i];
        else
        merge+="";
        if(i<word2.length)
        merge+=word2[i];
        else
        merge+="";
        i++;
        x++;
    }
    return merge;
}