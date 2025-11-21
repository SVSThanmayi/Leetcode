/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var count=0;
   for(var i=0;i<haystack.length;i++)
   {
        for(var j=0;j<needle.length;j++)
        {
            if(needle[j]==haystack[i+j])
            {
                count++;
            }
            else
            {
                count=0;
            }
        }
        console.log(count);
        if(count==needle.length)
        {
            return i;
        }
        else{
            count=0;
        }
   } 
   return -1;
}