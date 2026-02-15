/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    var se=0,so=0;
    for(var i=1;i<=(2*n);i++)
    {
        if(i%2==0)
        {
            se+=i;
        }
        else
        { 
            so+=i;
        }
    }
    while(so>0)
    {
        var temp=so;
        so=se%so;
        se=temp;
    }
    return se;
};