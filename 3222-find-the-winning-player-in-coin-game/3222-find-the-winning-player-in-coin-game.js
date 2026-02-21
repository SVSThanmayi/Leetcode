/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function(x, y) {
    var p1="Alice",p2="Bob";
    var count=0;
    while(x>=1 && y>=4)
    {
        x--;
        y-=4;
        count++;
    }
    if(count%2==0)
    {
        return p2;
    }
    return p1;
};