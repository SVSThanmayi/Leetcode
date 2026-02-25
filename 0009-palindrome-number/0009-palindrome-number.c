bool isPalindrome(int x) {
    int temp=x;
     long int r,rev=0,rem;
    while(x>0)
    {
        r=x%10;
        rev=rev*10+r;
        x=x/10;
    }
    if(rev==temp)
    return true;
    else
    return false;
}