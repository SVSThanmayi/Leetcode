var countLargestGroup = function(n) {
    let map = {};

    for(let i = 1; i <= n; i++)
    {
        let sum = sumd(i);
        if(map[sum] == undefined)
        map[sum] = 0;
        map[sum]++;
    }
    let max = 0;
    for(let key in map)
    max = Math.max(max, map[key]);
    let count = 0;
    for(let key in map)
    {
        if(map[key] == max)
        count++;
    }
    return count;
};

function sumd(num)
{
    let sum = 0;
    while(num > 0)
    {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}