/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(var i=0;i<nums.length;i++)
    {
        if(i==sumOfDigits(nums[i]))
        {
            return i;
        }
    }
    return -1;
};
function sumOfDigits(n)
{
    var sum=0;
    while(n>0)
    {
        sum+=(n%10);
        n=Math.floor(n/10);
    }
    return sum;
}