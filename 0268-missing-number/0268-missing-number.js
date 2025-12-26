/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum=0;
    for(var i=1;i<=nums.length;i++)
    {
        sum+=i;
    }
    var total=0;
    for(var i=0;i<nums.length;i++)
    {
        total+=nums[i];
    }
    return sum-total;
};