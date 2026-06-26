/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* deleteDuplicates(struct ListNode* head) 
{
    for(struct ListNode* i = head; i!=NULL && i->next!=NULL;)
    {
        struct ListNode* temp=i->next;
        if(temp->val == i->val)
        {
            i->next=temp->next;
            free(temp);
        }
        else
        {
            i=i->next;
        }
    }
    return head;
}