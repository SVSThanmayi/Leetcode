/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    var prod=0;
    var arr=[],i=0;
    while(n>0)
    {
        arr[i]=n%10;
        n=Math.floor(n/10);
        i++;
    }
    for(var i=0;i<arr.length;i++)
    {
        for(var j=i+1;j<arr.length;j++)
        {
            if(arr[i]*arr[j] > prod)
            {
                prod=arr[i]*arr[j];
            }
        }
    }
    return prod;
};