/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    var sum=0;
    while(n>0)
    {
        sum+=n%k;
        console.log(sum)
        n=Math.floor(n/k);
        console.log(n)
    }
    return sum;
};