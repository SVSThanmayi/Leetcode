/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let [p1,p2,p3]=points;
    var s1=(p2[1]-p1[1])*(p3[0]-p2[0]);
    var s2=(p3[1]-p2[1])*(p2[0]-p1[0]);
    if(s1==s2)
    return false;
    return true;
};