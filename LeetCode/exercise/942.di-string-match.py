#
# @lc app=leetcode id=942 lang=python3
#
# [942] DI String Match
#

# @lc code=start
from itertools import combinations


class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        n = len(s)
        lo = 0
        hi = n
        res = []
        for i in range(n):
            if s[i] == 'I':
                res.append(lo)
                lo += 1
            else:
                res.append(hi)
                hi -= 1
        res.append(lo)
        return res
# @lc code=end

