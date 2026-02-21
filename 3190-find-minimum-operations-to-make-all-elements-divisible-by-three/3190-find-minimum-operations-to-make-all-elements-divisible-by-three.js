/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    var i=0,count=0;
    while(i<nums.length)
    {
        if(nums[i]%3!=0)
        {
            count++;
        }
        i++;
    }
    return count;
};