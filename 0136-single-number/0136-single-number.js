var singleNumber = function(nums) {
    for(var i=0;i<nums.length;i++) {
        var count = 0;
        for(var j=0;j<nums.length;j++) {
            if(nums[i] == nums[j] && i != j) {
                count++;
            }
        }
        if(count == 0)
            return nums[i];
    }
}