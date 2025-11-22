/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var s="";
    var count=0;
    for(var i=0;i<strs[0].length;i++)
    {
        count=0;
        var letter=strs[0][i];
        for(var j=1;j<strs.length;j++)
        {
            if(strs[j].length==i)
            {
                return s;
            }
            if(letter==strs[j][i])
            {
                count++;
            }
        }
        if(count==strs.length-1)
        {
            s+=letter;
        }
        else
        {
            return s;
        }
    }
    return s;
}