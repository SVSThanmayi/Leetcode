/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    var n;
    if(purchaseAmount%10!=0)
    {
        if(purchaseAmount%10<5)
        n=purchaseAmount-(purchaseAmount%10);
        else
        n=purchaseAmount+(10-(purchaseAmount%10))
        console.log(n);
        return 100-n;
    }
    return 100-purchaseAmount
};