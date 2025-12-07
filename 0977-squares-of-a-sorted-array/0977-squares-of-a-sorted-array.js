/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(var i=0;i<nums.length;i++)
    {
        nums[i]=nums[i]*nums[i];
    }
    nums=sort(nums);
    return nums;
}
function sort(a)
{
    for(var i=0;i<a.length;i++)
    {
        for(var j=0;j<a.length-1-i;j++)
        {
            if(a[j+1]<a[j])
            {
                var temp;
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    return a;
}