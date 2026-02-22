/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    var n=grid.length;
    var freq={};
    for (var i=0;i<n;i++) 
    {
        for (var j=0;j<n;j++) 
        {
            var num=grid[i][j];
            freq[num]=(freq[num]||0)+1;
        }
    }
    var repeated=-1;
    var missing=-1;
    for (var i=1;i<=n*n;i++) 
    {
        if (freq[i]==2) 
        {
            repeated=i;
        }
        if (!freq[i]) 
        {
            missing=i;
        }
    }
    var  arr=[repeated,missing];
    return arr
}