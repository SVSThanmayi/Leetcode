/**
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function(n, m, k) {
    var c1=0,c2=0;
    if(n>k)
    {
        c1=cost(n,k);
    }
    if(m>k)
    {
        c2=cost(m,k);
    }
    return c1+c2;
};
function cost(p,k)
{
    var cost=1
    while(p>k)
    {
        cost*=k;
        p=p-k;
    }
    return cost*p;
}