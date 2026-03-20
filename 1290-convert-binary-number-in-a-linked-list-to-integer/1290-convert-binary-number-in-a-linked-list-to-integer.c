/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
int getDecimalValue(struct ListNode* head) {
    int length=0;
    struct ListNode *current;
    current=head;
    while(current!=NULL)
    {
        length++;
        current=current->next;
    }
    current=head;
    int sum=0;
    for(int i=length-1;i>=0;i--)
    {
        if(current->val==1)
        {
            sum+=pow(2,i);
        }
        current=current->next;
    }
    return sum;
}