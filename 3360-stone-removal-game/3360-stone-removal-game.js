/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    if(n < 10)
    {
        return false;
    }

    var turn = 1;   // 1 = Alice, 2 = Bob
    for(var i = 10; i > 0; i--)
    {
        if(n - i < 0)
        {
            if(turn == 1)
                return false;   // Alice can't move
            else
                return true;    // Bob can't move
        }

        n = n - i;
        turn = turn == 1 ? 2 : 1;   // switch turn
    }

    return false;
};
