/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    var count=1,x,i=0;
    var a=[];
    while(n>0)
    {
        x=n%10;
        n=Math.floor(n/10);
        if(x!=0)
        {
            a[i]=x*count;
            i++;
        }
        count*=10;
    }
    return a.reverse();
};