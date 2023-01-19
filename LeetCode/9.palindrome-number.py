#
# @lc app=leetcode id=9 lang=python3
#
# [9] Palindrome Number
#

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        # int to string 
        xs = str(x)
        return xs == xs[::-1]
        
        
# @lc code=end

# Idea:
# Convert int -> string , if both are equals, the integer is palindrome 