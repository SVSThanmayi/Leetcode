/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {

    var n = mat[0].length;
    k = k % n;
    var arr = [];
    for (var i = 0; i < mat.length; i++)
    {
        arr[i] = [];
        for (var j = 0; j < mat[i].length; j++)
        {
            arr[i][j] = mat[i][j];
        }
    }
    while (k > 0)
    {
        for (var i = 0; i < mat.length; i++)
        {
            mat[i] = shift(mat[i], i);
        }
        k--;
    }
    for (var i = 0; i < mat.length; i++)
    {
        for (var j = 0; j < mat[i].length; j++)
        {
            if (mat[i][j] != arr[i][j])
            {
                return false;
            }
        }
    }

    return true;
};

function shift(arr, k)
{
    var n = arr.length;

    if (k % 2 != 0) 
    {
        var temp = arr[n - 1];
        for (var i = n - 1; i > 0; i--)
        {
            arr[i] = arr[i - 1];
        }
        arr[0] = temp;
    }
    else
    {
        var temp = arr[0];
        for (var i = 0; i < n - 1; i++)
        {
            arr[i] = arr[i + 1];
        }
        arr[n - 1] = temp;
    }

    return arr;
}