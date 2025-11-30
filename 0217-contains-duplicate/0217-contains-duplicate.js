/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var elements=new Map();
    for(var i=0;i<nums.length;i++)
    {
        if(elements.has(nums[i]))
        return true;
        else
        elements.set(nums[i],i+1);
    }
    return false;
};