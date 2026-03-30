/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    var dayD={
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }
    var monthD={
        1:0,
        2:3,
        3:3,
        4:6,
        5:1,
        6:4,
        7:6,
        8:2,
        9:5,
        10:0,
        11:3,
        12:5
    }
    var yearD;
    if(year<=1999 && year>=1971)
    yearD=0;
    if(year<=2099 && year>=2000)
    yearD=6;
    if(year==2100)
    yearD=4;
    var digi=(year%100);
    var result=(day+(monthD[month])+yearD+digi+Math.floor(digi/4))%7;
    if (month < 3 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)))
    result = (result + 6) % 7;
    return dayD[result];
};