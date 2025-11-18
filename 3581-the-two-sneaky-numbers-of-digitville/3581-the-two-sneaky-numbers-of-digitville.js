/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    var repeated=new Array(2);
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++)
        {
            if(i==j)
            continue;
            if(nums[i]==nums[j])
            (repeated[0]==undefined)?(repeated[0]=nums[i]):(repeated[1]=nums[i])
        }
    }
    return repeated;
};