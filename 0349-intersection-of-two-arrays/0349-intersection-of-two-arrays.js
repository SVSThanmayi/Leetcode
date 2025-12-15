/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   var a=[],x=0,count=0;
   for(var i=0;i<nums1.length;i++)
   {
    count=0;
        for(var j=0;j<nums2.length;j++)
        {
            if(nums1[i]==nums2[j])
            count++;
        }
        if(count>0 && !a.includes(nums1[i]))
        {
            a[x]=nums1[i];
            x++;
        }
   } 
   return a;
};