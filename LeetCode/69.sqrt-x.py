#
# @lc app=leetcode id=69 lang=python3
#
# [69] Sqrt(x)
#

# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        start = 0
        end = x
        while start < end:
            mid = (start + end) / 2
            if (mid * mid <= x):
                start = mid - 1
            else:
                end = mid

        return int(start)
        
# @lc code=end

