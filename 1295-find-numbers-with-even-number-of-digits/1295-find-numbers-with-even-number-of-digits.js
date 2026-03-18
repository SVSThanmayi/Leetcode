/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    var count=0;
    for(var i=0;i<nums.length;i++)
    {
        var str=String(nums[i]);
        if(str.length%2==0)
        count++;
    }
    return count;
};