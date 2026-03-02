/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    var ret=0;
    if(a<b)
    {
        for(var i=1;i<=a;i++)
        {
            if(a%i==0 && b%i==0)
            {
                ret++;
            }
        }
    }
    else
    {
        for(var i=1;i<=b;i++)
        {
            if(a%i==0 && b%i==0)
            {
                ret++;
            }
        }
    }
    return ret;
};