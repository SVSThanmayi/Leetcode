/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    var sumD=0,sumS=0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]>=10)
        {
            sumD+=nums[i];
        }
        else
        {
            sumS+=nums[i];
        }
    }
    console.log(sumS,sumD);
    if(sumS==sumD)
    {
        return false;
    }
    return true;
};