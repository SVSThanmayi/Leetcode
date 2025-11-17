/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var sum;
    var index=new Array(2);
    for(var i=0;i<nums.length;i++)
    {
        for(var j=i+1;j<nums.length;j++)
        {
            sum=nums[i]+nums[j];
            if(sum==target){
                index[0]=i;
                index[1]=j;
                break;
            }
            else{
                sum=0;
            }
        }
    }
    return index;
};