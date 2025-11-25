/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    var str = "";
    s = s.toLowerCase();
    for (var i = 0; i < s.length; i++) 
    {
        str += (s.charCodeAt(i) - 96);
    }
    var sum = 0;
    var x = 0;
    while (x < k) 
    {
        sum = 0;
        for (var i = 0; i < str.length; i++) 
        {
            sum += Number(str[i]);
        }
        str = "" + sum; 
        x++;
    }
    return sum;
}