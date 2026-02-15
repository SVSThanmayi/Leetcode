/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    var sum=0,prod=1,r;
    var temp=n;
    while(n>0)
    {
        sum+=n%10;
        prod*=n%10;
        n=Math.floor(n/10);
    }
    var total=sum+prod;
    console.log(sum,prod,total)
    if(temp%total==0)
    {
        return true;
    }
    return false;
};