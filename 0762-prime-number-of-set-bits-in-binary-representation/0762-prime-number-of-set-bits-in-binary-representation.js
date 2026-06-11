/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    var out=0;
    for(var i=left;i<=right;i++)
    {
        var str=i.toString(2);
        var count=0;
        for(j=0;j<str.length;j++)
        {
            if(str[j]=='1')
            {
                count++;
            }
        }
        if(isPrime(count))
        out++;
    }
    return out;
};
function isPrime(n) {
    if(n<=1) 
    {
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}