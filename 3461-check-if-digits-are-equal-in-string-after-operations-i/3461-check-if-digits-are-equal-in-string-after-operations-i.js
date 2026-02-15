/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    var str="1";
    if(s.length==2)
    {
        if(s[0]==s[1])
        {
            return true;
        }
        return false;
    }
    if(s.length>2)
    {
         var ret=reduce(s);
    }
    return ret;

};
function reduce(s)
{
    var str="1";
    for(var i=1;i<s.length;i++)
    {
        str+=String((Number(s[i-1])+Number(s[i]))%10);
    }
    str=str.slice(1,str.length);
    if(str.length>2)
    {
        return reduce(str);
    }
    else
    {
        if(str[0]==str[1])
        return true;
        else
        return false
    }
}