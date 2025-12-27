/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var soln=fibonacci(n);
    return soln;
};
function fibonacci(n)
{
    var result=0;
    if(n==0)
    {
        return 0;
    }
    else if(n==1)
    {
        return 1;
    }
    else
    {
        result=fibonacci(n-1)+fibonacci(n-2);
        return result;
    }
}