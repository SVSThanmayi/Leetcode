/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    var sum=0;
    for(var i=0;i<nums.length;i++)
    {
        nums[i]=encrypt(nums[i]);
         console.log(nums)
        sum+=nums[i];
    }
     console.log(sum)
    return sum;
};
function encrypt(n)
{
    var max=0,count=0,r;
    while(n>0)
    {
        r=n%10;
        if(r>max)
        {
            max=r;
        }
        console.log(max)
        count++;
        n=Math.floor(n/10);
    }
     var encrypted = 0;
    while (count > 0) 
    {
        encrypted = encrypted * 10 + max;
        count--;
    }
    console.log(encrypted)
    return encrypted;
}