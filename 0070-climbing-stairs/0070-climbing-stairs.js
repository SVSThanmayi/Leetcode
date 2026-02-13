/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var next,first=1,second=2;
    if(n==1)
    return 1;
    else if(n==2)
    return 2;
    else
    {
        for(var i=3;i<=n;i++)
        {
            next=first+second;
            first=second;
            second=next;
        }
    }
    return second;
};