/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++)
        {
            let first = nums[i];
            while(first >= 10)
            {
                first = Math.floor(first / 10);
            }
            let last = nums[j] % 10;
            if(gcd(first, last) === 1)
            {
                count++;
            }
        }
    }

    return count;
};
function gcd(a, b){
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}