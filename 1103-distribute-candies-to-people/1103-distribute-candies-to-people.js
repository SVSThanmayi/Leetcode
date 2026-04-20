/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    var i=1,a=new Array(num_people),n=0;
    a.fill(0);
    while(candies>0)
    {
        a[n]+=i;
        candies-=i;
        i++;
        n++;
        if(n>num_people-1)
        {
            n=0;
        }
        if(i>candies)
        {
            a[n]+=candies;
            break;
        }
    }
    return a;
};