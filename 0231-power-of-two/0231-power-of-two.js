/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    var r,temp=n;
    while(temp>1)
    {
        r=temp%2;
        temp=temp/2;
    }
    if(n==1)
    return true;
    if(r==0)
    return true;
    else 
    return false;
};