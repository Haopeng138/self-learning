#
# @lc app=leetcode id=2 lang=python3
#
# [2] Add Two Numbers
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        result = ListNode()
        n1,n2,carry,current = 0,0,0,result
        while l1 is not None or l2 is not None or carry != 0:
            if l1 is None:
                n1 = 0
            else:
                n1 = l1.val
                l1 = l1.next
            
            if l2 is None:
                n2 = 0
            else:
                n2 = l2.val
                l2 = l2.next
            current.next = ListNode((n1+n2+carry)%10)
            current = current.next 
            carry = int((n1+n2+carry)/10)
 
        return result.next

            
        
# @lc code=end

