/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    var a=[],count=1;
    if(n%2==0)
    {
        for(var i=0;i+1<n;i+=2)
        {
            a[i]=count;
            a[i+1]=0-(count);
            count++;
        }
    }
    else
    {
        for(var i=0;i+1<n;i+=2)
        {
            a[i]=count;
            a[i+1]=0-(count);
            count++;
        }
        a[n-1]=0;
    }
    return a;
};