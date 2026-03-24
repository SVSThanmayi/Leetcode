/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    
    var x = coordinates[0][0];
    var y = coordinates[0][1];
    
    var x1 = coordinates[1][0];
    var y1 = coordinates[1][1];
    
    for(var i = 2; i < coordinates.length; i++)
    {
        var x2 = coordinates[i][0];
        var y2 = coordinates[i][1];
        
        if((y1 - y) * (x2 - x) != (y2 - y) * (x1 - x))
        {
            return false;
        }
    }
    
    return true;
};