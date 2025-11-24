/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    var array=s.split(" ");
    var org=[];
    var str=""
    for(var i=0;i<array.length;i++)
    {
        var num=parseInt(array[i].match(/\d+/)[0]);
        var word=array[i].replace(array[i][array[i].length-1],"");
        org[num-1]=word;
    }
    for(var i=0;i<org.length;i++)
    {
        str+=org[i];
        str+=" ";
    }
    return str.trim();
};