/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    var minDist=Infinity;
    var n=nums.length;
    for(var i=0;i<n;i++)
    {
        for(var j=i+1;j<n;j++)
        {
            for(var k=j+1;k<n;k++)
            {
                if(nums[i]==nums[j] && nums[j]==nums[k])
                {
                    var dist=Math.abs(i-j)+Math.abs(j-k)+Math.abs(k-i);
                    if(dist<minDist)
                    {
                        minDist=dist;
                    }
                }
            }
        }
    }
    if(minDist==Infinity)
    return -1;    
    return minDist;

};