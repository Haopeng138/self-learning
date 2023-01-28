#
# @lc app=leetcode id=66 lang=python3
#
# [66] Plus One
#
from typing import List
# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        x = len(digits)-1
        while x >= 0:
            if digits[x] < 9:
                digits[x]+= 1
                return digits
            digits[x]=0
            x-= 1 

        digits.insert(0,1)
        return digits
        
Solution.plusOne(Solution,[9])            
        
# @lc code=end

