/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    var prod=1;
    for(var i=0;i<nums.length;i++)
    {
        prod*=nums[i];
    }
    return signFunc(prod);
};
function signFunc(x)
{
    if(x>0)
    return 1;
    else if(x<0)
    return -1;
    else
    return 0;
}