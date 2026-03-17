/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var count=0;
    while(num>0)
    {
        if(num%2==0)
        {
            num=Math.floor(num/2);
        }
        else
        {
            num--;
        }
        count++;
    }
    return count;
};