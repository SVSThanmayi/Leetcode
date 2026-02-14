/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    var sum=0;
    var str=String(n);
    var x=Number(str.replaceAll('0',''));
    var temp=x;
    while(x>0)
    {
        sum+=(x%10);
        x=Math.floor(x/10);
    }
    return temp*sum;
};