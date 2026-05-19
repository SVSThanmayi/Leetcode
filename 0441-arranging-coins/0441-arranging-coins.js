/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    var count=0;
    var i=1;
    while(i<=n)
    {
        n-=i;
        count++;
        i++;
    }
    return count;
};