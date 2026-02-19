/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    c1=coordinate1.charCodeAt(0)-96;
    r1=coordinate1[1];
    c2=coordinate2.charCodeAt(0)-96;
    r2=coordinate2[1];
    var black=0,white=0;
    if((c1%2==0 && r1%2==0)||(c1%2!=0 && r1%2!=0))
    black++;
    else
    white++;
    if((c2%2==0 && r2%2==0)||(c2%2!=0 && r2%2!=0))
    black++;
    else
    white++;
    return (white==2 || black==2)?true:false;
};