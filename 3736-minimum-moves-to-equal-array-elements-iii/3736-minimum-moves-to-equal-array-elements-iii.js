/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var max=nums[0]
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]>max)
        max=nums[i];
    }
    var count=0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]<max)
        {
            count+=max-nums[i];
            nums[i]+=max-nums[i];
        }
    }
    return count;
};