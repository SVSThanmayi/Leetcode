/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    var freq={};
    for(var i=0;i<nums.length;i++)
    {
        ch=nums[i];
        if(freq[ch])
        {
            freq[ch]++;
        }
        else
        {
            freq[ch]=1;
        }
    }
    for(let key in freq)
    {
        if(isPrime(freq[key]))
        {
            return true;
        }
    }
    return false;
};
function isPrime(n)
{
    if(n<2)
    {
        return false;
    }
    for(var i=2;i<=(n/2);i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}