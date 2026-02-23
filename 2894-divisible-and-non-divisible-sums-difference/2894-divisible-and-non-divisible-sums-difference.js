/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    var sumND=0,sumD=0;
    for(var i=1;i<=n;i++)
    {
        if(i%m!=0)
        {
            sumND+=i
        }
        else
        {
            sumD+=i
        }
    }
    return sumND-sumD;
};