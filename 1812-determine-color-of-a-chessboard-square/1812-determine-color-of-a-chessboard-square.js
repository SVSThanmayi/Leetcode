/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    var n1=coordinates.charCodeAt(0);
    var n2=Number(coordinates[1]); 
    if((n1%2==0 && n2%2==0)||(n1%2!=0 && n2%2!=0))
    return false;
    return true;
};