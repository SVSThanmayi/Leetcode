/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    var str=String(num);
    var max=0;
    for(var i=0;i<str.length;i++)
    {
        var temp=String(num);
        if(temp[i]=='6')
        temp=temp.substring(0,i)+'9'+temp.substring(i+1);
        else
        temp[i]=temp.substring(0,i)+'6'+temp.substring(i+1);
        console.log(temp);
        max=Math.max(max,Number(temp));
        console.log(max);
    }
    return max;
};