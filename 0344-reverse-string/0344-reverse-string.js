/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var n=s.length;
    if(n%2==0)
    {
        for(var i=0;i<n/2;i++)
        {
            var c=s[n-i-1];
            s[n-i-1]=s[i];
            s[i]=c;
        }
    }
    else
    {
        for(var i=0;i<(n-1)/2;i++)
        {
            var c=s[n-i-1];
            s[n-i-1]=s[i];
            s[i]=c;
        }
    }
}