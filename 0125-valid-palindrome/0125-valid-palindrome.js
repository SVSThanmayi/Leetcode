/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    var temp="",rev="";
    for(var i=0;i<s.length;i++)
    {

        var ch=s[i];
        if(((ch<='z')&&(ch>='a'))||((ch>='0')&&(ch<='9')))
        {
            temp+=ch;
        }
    }
    for(var i=temp.length-1;i>=0;i--)
    {
        rev+=temp[i];
    }
    return rev==temp;
};