/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    var a=s.split(" ");
    var i=0;
    var b=[];
    while(i<k)
    {
        b[i]=a[i];
        i++;
    }
    s="";
    for(var j=0;j<b.length;j++)
    {
        s+=b[j];
        s+=" ";
    }
    return s.trim();
};