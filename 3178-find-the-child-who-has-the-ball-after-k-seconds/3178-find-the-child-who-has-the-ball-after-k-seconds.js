/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    n--;
    var rem=k%n
    var quo=Math.floor(k/n);
    if(quo%2!=0)
    {
        return n-(rem);
    }
        return (rem);
};