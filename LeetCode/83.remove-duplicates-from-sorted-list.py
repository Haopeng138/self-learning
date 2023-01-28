#
# @lc app=leetcode id=83 lang=python3
#
# [83] Remove Duplicates from Sorted List
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None: 
            return head
        result = head
        
        while result.next :
            if result.val == result.next.val:
                result.next = result.next.next
            else:
                result = result.next
                
        return head
        
# @lc code=end

