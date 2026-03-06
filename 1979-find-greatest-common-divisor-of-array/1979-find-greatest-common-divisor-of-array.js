/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    var min=nums[0],max=nums[0];
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]<min)
        min=nums[i];
        if(nums[i]>max)
        max=nums[i];
    }
    var gcd;
    while(min!=0)
    {
        var temp=min;
        min=max%min;
        max=temp;
    }
    gcd=max;
    return max;
};