var oddCells = function(m, n, indices) {
    var mat = Array(m).fill().map(() => Array(n).fill(0));
    for(var k = 0; k < indices.length; k++)
    {
        var r=indices[k][0];
        var c=indices[k][1];
        for(var j=0; j<n;j++)
        {
            mat[r][j]++;
        }
        for(var i=0;i<m;i++)
        {
            mat[i][c]++;
        }
    }
    var count=0;
    for(var i=0;i<m;i++)
    {
        for(var j=0;j<n;j++)
        {
            if(mat[i][j]% 2!=0)
            {
                count++;
            }
        }
    }
    return count;
};