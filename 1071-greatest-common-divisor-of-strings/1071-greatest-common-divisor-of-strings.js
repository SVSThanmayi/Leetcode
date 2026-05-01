/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    str="";
    if(str1+str2!=str2+str1)
    {
        return "";
    }
    l1=str1.length;
    l2=str2.length;
    while(l2!=0)
    {
        var temp=l2;
        l2=l1%l2;
        l1=temp;
    }
    return str1.substring(0, l1);
};