/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    str="";
    var sum1=nums[0]+nums[1];
    var sum2=nums[1]+nums[2];
    var sum3=nums[2]+nums[0];
    if((sum1>nums[2])&&(sum2>nums[0])&&(sum3>nums[1]))
    {
        if((nums[0]==nums[1])&&(nums[2]==nums[1])&&(nums[0]==nums[2]))
        {
            str+="equilateral";
        }
        else if((nums[0]==nums[1])||(nums[2]==nums[1])||(nums[0]==nums[2]))
        {
            str+="isosceles";
        }
        else
        {
            str+="scalene";
        }
    }
    else
    {
        str+="none";
    }
    return str;
};