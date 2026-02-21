/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    sum=0;
    var temp=x;
    while(x>0)
    {
        sum+=x%10;
        x=Math.floor(x/10);
    }
    if(temp%sum==0)
    {
        return sum;
    }
    return -1; 
};