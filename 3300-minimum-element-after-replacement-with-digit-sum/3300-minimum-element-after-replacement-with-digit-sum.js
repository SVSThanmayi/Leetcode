/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    var min=nums[0];
    for(var i=0;i<nums.length;i++)
    {
        nums[i]=sum(nums[i]);
        if(nums[i]<min)
        min=nums[i];
    }
    return min;
};
function sum(n)
{
    var sum=0;
    while(n>0)
    {
        sum+=n%10;
        n=Math.floor(n/10);
    }
    return sum;
}