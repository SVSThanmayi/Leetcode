/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    var bin=n.toString(2),newbin="";
    for(var i=0;i<bin.length;i++)
    {
        if(bin[i]=="0")
        {
            newbin+="1";
            continue;
        }
        newbin+=bin[i];
    }
    return parseInt(newbin,2);
};