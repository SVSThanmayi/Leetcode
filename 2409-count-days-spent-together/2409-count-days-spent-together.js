/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) 
{
    var day=[31,28,31,30,31,30,31,31,30,31,30,31];
    var aa=days(Number(arriveAlice.substring(0,2)),Number(arriveAlice.substring(3)),day);
    var al=days(Number(leaveAlice.substring(0,2)),Number(leaveAlice.substring(3)),day);
    var ba=days(Number(arriveBob.substring(0,2)),Number(arriveBob.substring(3)),day);
    var bl=days(Number(leaveBob.substring(0,2)),Number(leaveBob.substring(3)),day);
    var start=Math.max(aa,ba);
    var end=Math.min(al,bl);
    if(start>end)
    return 0;
    else
    return end-start+1;
};
function days(m,d,a)
{
    var i=0,sum=d;
    while(i<m-1)
    {
        sum+=a[i];
        i++;
    }
    return sum;
}