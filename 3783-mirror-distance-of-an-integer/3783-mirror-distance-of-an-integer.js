/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    var temp=n,r,rev=0;
    while(temp>0)
    {
        r=temp%10;
        rev=rev*10+r;
        temp=Math.floor(temp/10);
    } 
    return Math.abs(n-rev);   
};