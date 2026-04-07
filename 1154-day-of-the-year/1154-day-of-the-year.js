/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    var days=0
    var daysOfMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
    var month=Number(date.slice(5,7));
    var day=Number(date.substring(date.length-2));
    for(var i=0;i<month-1;i++)
    {
        days+=daysOfMonth[i];
    }
    days+=Number(date.substring(date.length-2));
    var year=date.slice(0,4);
    if(((year%4==0 && year%100!=0)|| year%400==0) && month>2)
    return days+1;
    else
    return days;
};