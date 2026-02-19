/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    var s1=String(num1).padStart(4,'0');
    var s2=String(num2).padStart(4,'0');
    var s3=String(num3).padStart(4,'0');
    console.log(s1,s2,s3);
    var m1=[],m2=[],m3=[],m4=[];
    var result="";
    for(var i=0;i<4;i++)
    {
        var min=Math.min(Number(s1[i]),Number(s2[i]),Number(s3[i]));
        result+=min;
    }
    return Number(result);
};