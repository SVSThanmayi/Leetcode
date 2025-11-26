/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min=prices[0];
    var maxprofit=0;
    for(var i=0;i<prices.length;i++)
    {
        if(prices[i]<min)
        {
            min=prices[i];
        }
        else{
            maxprofit=Math.max(maxprofit,prices[i]-min)
        }
    }
    return maxprofit;
};