/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function(n) {
    var bin=n.toString(2);
    var rev=bin.split('').reverse().join('');
    var count=0;
    for(var i=0;i<bin.length;i++)
    {
        if(rev[i]!=bin[i])
        count++;
    }
    return count;
};