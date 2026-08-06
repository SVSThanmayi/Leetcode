/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) 
{
    int value;
    struct ListNode *head=NULL ,*tail=NULL;
    if(list1==NULL)
    {
        return list2;
    }
    else if(list2==NULL)
    {
        return list1;
    }
    while(list1!=NULL && list2!=NULL)
    {
        struct ListNode *newnode=(struct ListNode*)malloc(sizeof(struct ListNode));
        if(list1->val <= list2->val)
        {
            value=list1->val;
            list1=list1->next;
        }
        else
        {
            value=list2->val;
            list2=list2->next;
        }
        newnode->val=value;
        newnode->next=NULL;
        if(head==NULL)
        {
            head=newnode;
            tail=newnode;
        }
        else
        {
            tail->next=newnode;
            tail=newnode;
        }
    }
    while(list1!=NULL)
    {
        tail->next=list1;
        tail=list1;
        list1=list1->next;
    }
    while(list2!=NULL)
    {
        tail->next=list2;
        tail=list2;
        list2=list2->next;
    }
    return head;
}