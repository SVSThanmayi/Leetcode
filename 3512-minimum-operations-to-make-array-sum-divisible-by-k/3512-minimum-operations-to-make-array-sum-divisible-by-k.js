/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    var max=nums[0],x=0;
    var sum=0,count=0;
    for(var i=0;i<nums.length;i++)
    {
        if(max<nums[i])
        {
            max=nums[i]
            x=i;
        }
        sum+=nums[i];
    }
    console.log(x);
    while(sum%k!=0)
    {
        sum-=nums[x];
        count ++;
        nums[x]-=1;
        sum+=nums[x];
    }
    return count;
};