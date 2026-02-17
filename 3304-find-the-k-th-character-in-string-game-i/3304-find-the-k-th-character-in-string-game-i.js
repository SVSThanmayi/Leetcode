/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    var str="a";
    var ret=operation(str,k);
    return ret[k-1];
};
function operation(str,k)
{ 
    var newStr="";
    for(var i=0;i<str.length;i++)
    {
        var code = str.charCodeAt(i);
        if(code == 122)
        newStr += "a";
        else
        newStr += String.fromCharCode(code + 1);
    }
    ret=str+newStr;
    if(ret.length<k)
    {
        ret=operation(ret,k);
    }
    return ret;
}