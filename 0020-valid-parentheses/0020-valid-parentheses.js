/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  var d={"(":1,")":1,"{":2,"}":2,"[":3,"]":3};
    var str="";
    for(var i=0;i<s.length;i++)
    {
        if((s[i]=="(")||(s[i]=="{")||(s[i]=="["))
        {
            str+=s[i];
        }
        else
        {
            if(d[s[i]]==d[str[str.length-1]])
            {
                str=str.slice(0,str.length-1);
            }
            else
            {
                return false;
            }
        }
    }
    if(str.length==0)
    {
        return true;
    }
    return false;
};