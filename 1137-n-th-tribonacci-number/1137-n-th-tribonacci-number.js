/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n==1 || n==2)
    {
        return 1;
    }
    if(n==0)
    {
        return 0;
    }
    var d,a=0,b=1,c=1;
    for(var i=3;i<=n;i++)
    {
        d=a+b+c;
        a=b;
        b=c;
        c=d;
    }
    return c;
};