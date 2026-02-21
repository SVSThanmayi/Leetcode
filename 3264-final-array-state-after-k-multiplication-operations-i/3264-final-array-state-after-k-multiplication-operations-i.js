/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(var i=0;i<k;i++)
    {
        for(var i=k;i>0;i--)
        {
            var j=min(nums);
            nums[j]=nums[j]*multiplier;
        }
        return nums;
    }
};
function min(a)
{
    var min=a[0],x=0;
    for(var i=1;i<a.length;i++)
    {
        if(a[i]<min)
        {
            min=a[i];
            x=i;
        }
    }
    return x;
}