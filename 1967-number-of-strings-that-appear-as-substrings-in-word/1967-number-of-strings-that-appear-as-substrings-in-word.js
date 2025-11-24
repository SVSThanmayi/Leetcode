/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    var temp="";
    var count=0;
    for(var i=0;i<patterns.length;i++)
    {
        temp=patterns[i];
        var str=word.replaceAll(temp,"");
        if(str!=word)
        {
            count++;
        }
    }
    return count;
};