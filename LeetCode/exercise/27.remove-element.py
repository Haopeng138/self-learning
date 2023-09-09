#
# @lc app=leetcode id=27 lang=python3
#
# [27] Remove Element
#

from typing import List
# @lc code=start
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        while val in nums:
            nums.remove(val)
# @lc code=end

