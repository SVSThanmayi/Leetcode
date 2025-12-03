/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var arr=[];
    var count=0;
    for(var i=0;i<m;i++)
    {
        arr[i]=nums1[i];
    }
    for(var i=0;i<n;i++)
    {
        arr[m+i]=nums2[i];
    }
    for (var pass = 0; pass < m + n - 1; pass++) 
    {
        for (var i = 1; i < m + n; i++) 
        {
            if (arr[i] < arr[i - 1]) 
            {
                var temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        }
    }

    for(var i=0;i<m+n;i++)
    {
        nums1[i]=arr[i];
    }
}