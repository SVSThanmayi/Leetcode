/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    nums.sort((a,b)=> a-b);
    var max=0,min=0;
    for(var i=0;i<k;i++)
    {
        min+=nums[i];
        max+=nums[nums.length-1-i];
    }
    return max-min;
};