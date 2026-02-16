/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    var a1=[],a2=[];
    var diff=[];
    for(var i=1;i<nums.length;i++)
    {
        a1=nums.slice(0,i);
        a2=nums.slice(i);
        diff[i-1]=sum(a1)-sum(a2);
    }
    var count=0;
    for(var i=0;i<diff.length;i++)
    {
        if(diff[i]%2==0)
        {
            count++;
        }
    }
    return count;
};
function sum(arr)
{
    var sum=0;
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}