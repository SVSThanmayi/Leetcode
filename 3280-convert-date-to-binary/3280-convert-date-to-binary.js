/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    date=date.split("-");
    ret="";
    for(var i=0;i<date.length;i++)
    {
        if(i>0)
        ret+="-";
        ret+=Number(date[i]).toString(2);
    }
    return ret;
};