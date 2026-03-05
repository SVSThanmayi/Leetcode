/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    var temp=num;
    num=reverse(num);
    if(reverse(num)==temp)
    return true;
    return false; 
};
function reverse(num)
{
    var rev=0,r;
    while(num>0)
    {
        r=num%10;
        rev=rev*10+r;
        num=Math.floor(num/10);
    }
    return rev;
}