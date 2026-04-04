/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const MOD=1000000007n;
    var countp=0;
    for(var i=2;i<=n;i++)
    {
        var isPrime=true;
        for(var j=2;j*j<=i;j++)
        {
            if(i%j==0)
            {
                isPrime=false;
                break;
            }
        }
        if(isPrime==true)
        countp++;
    }
    let a = factorial(countp) %MOD;
    let b = factorial(n - countp)%MOD;
    return Number((a * b) % MOD);
};
function factorial(num)
{
    const MOD=1000000007n;
    var fact=1n;
    for(var i=1;i<=(num);i++)
    {
        fact=(fact*BigInt(i)) % MOD;
    }
    return fact;
}