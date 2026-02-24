/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function(nums) {
    var max1=-Infinity,max2=-Infinity,min=Infinity;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]>max1)
        {
            max2=max1;
            max1=nums[i];
        }
        else if(nums[i]>max2)
        {
            max2=nums[i];
        }
        if(nums[i]<min)
        {
            min=nums[i];
        }
    }
    return (max1+max2)-min;
};