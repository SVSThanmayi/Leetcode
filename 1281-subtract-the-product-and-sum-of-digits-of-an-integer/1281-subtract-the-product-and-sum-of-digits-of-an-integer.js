/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var prod=1,sum=0;
    while(n>0)
    {
        prod*=n%10;
        sum+=n%10;
        n=Math.floor(n/10);
    }
    return prod-sum;
};