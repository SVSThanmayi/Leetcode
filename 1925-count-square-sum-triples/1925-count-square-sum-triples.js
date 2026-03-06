/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    var count=0,c;
    for(var i=1;i<=n;i++)
    {
        for(var j=i+1;j<=n;j++)
        {
            c=Math.sqrt(Math.pow(i,2)+Math.pow(j,2));
            if(Number.isInteger(c) && c<=n)
            {
                count += 2;
            }
        }
    }
    return count;
};