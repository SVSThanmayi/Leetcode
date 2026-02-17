/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    var i=n,prod;
    while(i>=n)
    {
        prod=product(i);
        if(prod%t==0)
        {
            return i;
        }
        i++;
    }
};
function product(num)
{
    var prod=1;
    while(num>0)
    {
        prod*=num%10;
        num=Math.floor(num/10);
    }
    return prod;
}