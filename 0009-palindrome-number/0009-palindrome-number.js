/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    org=x;
    if(org<0)
    return false;
    var rev=0;
    var r;
    while(x>0){
        r=x%10;
        rev=rev*10+r;
        x=Math.floor(x/10);
    }
    if(rev==org)
    return true;
    else
    return false
};