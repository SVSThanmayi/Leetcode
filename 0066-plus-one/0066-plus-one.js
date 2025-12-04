/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 1;              // we want to add 1
    var num;

    // start from last digit and move left
    for (var i = digits.length - 1; i >= 0; i--) {
        num = digits[i] + carry;   // add carry
        digits[i] = num % 10;      // keep last digit
        carry = Math.floor(num / 10); // update carry (0 or 1)
    }

    // if carry still left, add 1 at beginning
    if (carry === 1) {
        digits.unshift(1);
    }

    return digits;
};
