/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var i=0;
    while(nums[i]<=target)
    {
        if(nums[i]==target)
        {
            return i;
        }
        i++;
    }
    return i;
};