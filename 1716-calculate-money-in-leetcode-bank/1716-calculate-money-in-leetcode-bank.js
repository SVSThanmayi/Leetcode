/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let sum = 0;
    let weekStart = 1;

    for (let i = 1; i <= n; i++) {
        sum += weekStart + (i - 1) % 7;

        if (i % 7 === 0) {
            weekStart++;
        }
    }

    return sum;
};