/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let i=num.length-1;
    while(i>=0 && k>0)
    {
        let sum=num[i]+k;
        num[i]=sum % 10;
        k=Math.floor(sum/10);
        i--;
    }
    while(k>0)
    {
        num.unshift(k%10);
        k=Math.floor(k/10);
    }
    return num;
};