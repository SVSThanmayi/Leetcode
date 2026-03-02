/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    var suml=0,sumf=0;
    var count=0,i=0;
    while(i!=n-count)
    {
        if(suml>=sumf && n-count>=i)
        {
            sumf+=i;
            i++
        }
        else
        {
            suml+=n-count;
            count++;
        }
    }
    if(sumf==suml)
    return i;
    return -1;
};