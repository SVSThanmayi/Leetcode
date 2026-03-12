/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    var a=new Array(100).fill(0),sum;
    for(var i=lowLimit;i<=highLimit;i++)
    {
        sum=sumOfDigits(i);
        a[sum]++;
    }
    var max=a[0];
    for(var i=0;i<a.length;i++)
    {
        if(a[i]>max)
        max=a[i];
    }
    return max;
};
function sumOfDigits(n)
{
    var r,sum=0;
    while(n>0)
    {
        sum+=n%10;
        n=Math.floor(n/10);
    }
    return sum;
}