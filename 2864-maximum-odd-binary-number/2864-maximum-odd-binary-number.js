/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    var count=0;
    var str="";
    for(var i=0;i<s.length;i++)
    {
        if(s[i]=="1")
        {
            count++;
        }
    }
    for(var i=0;i<s.length;i++)
    {
        if(i<count-1)
        {
            str+="1";
        }
        else if(i==s.length-1)
        {
            str+="1";
        }
        else
        {
            str+="0";
        }
    }
    return str;
};