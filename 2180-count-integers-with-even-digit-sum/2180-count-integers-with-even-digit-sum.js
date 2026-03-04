/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    var count=0
    for(var i=2;i<=num;i++)
    {
        if(digitSum(i)%2==0)
        {
            count++;
        }
    }
    return count;
};
function digitSum(n)
{
    var sum=0;
    while(n>0)
    {
        sum+=n%10;
        n=Math.floor(n/10);
    }
    return sum;
}