/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var arr=[];
    for(var i=left;i<=right;i++)
    {
        var temp=i,flag=true;
        while(temp>0)
        {
            var rem=temp%10;
            temp=Math.floor(temp/10);
            if(rem==0 || i%rem!=0)
            {
                flag=false;
                break;
            }
        }
        if(flag)
        arr.push(i);
    }
    return arr;
};