/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    var count=0,drink=0;
    while(numBottles>0)
    {
        numBottles--;
        drink++;
        count++;
        if(count==numExchange)
        {
            numBottles++;
            count=0;
        }
    }
    return drink;
};