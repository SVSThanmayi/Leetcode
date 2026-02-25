/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    var arr=[],count=0;
    for(var i=low;i<=high;i++)
    {
        if(symm(i)!=0)
        {
            arr[count]=symm(i);
            count++
        }
    }
    return arr.length;
};
function symm(num)
{
    var sum1=0,sum2=0;
    var str=String(num);
    if(str.length%2==0)
    {
        for(var i=0;i<str.length;i++)
        {
            if(i<str.length/2)
            {
                sum1+=Number(str[i]);
            }
            else
            {
                sum2+=Number(str[i]);
            }
        }
        if(sum1==sum2)
        return Number(str);
        return 0;
    }
    return 0;
}