#
# @lc app=leetcode id=70 lang=python3
#
# [70] Climbing Stairs
#

# @lc code=start
class Solution:
    def climbStairs(self, n: int) -> int:
        if n==0 or n==1:
            return 1
        a=1
        b=1
        for i in range(2,n+1):
            c=a+b
            a=b
            b=c
        return b
        


Solution.climbStairs(Solution,3)
# @lc code=end