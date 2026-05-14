/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n!=1 && n!=4)
    {
        n=happy(n);
    }
    if(n==1)
    return true;
    return false;
};
function happy(n)
{
    var sum=0;
    while(n>0)
    {
        sum+=Math.pow(n%10,2);
        n=Math.floor(n/10);
    }
    if(sum>=10)
    sum=happy(sum);
    return sum;
}