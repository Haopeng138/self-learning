#
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution:
    def isValid(self, s: str) -> bool:
        ack = []
        lookfor = {')':'(', '}':'{', ']':'['}

        for p in s:
            if p in lookfor.values():
                ack.append(p)
            elif ack and lookfor[p] == ack[-1]:
                ack.pop()
            else:
                return False

        return ack == []


print(Solution.isValid(Solution,"()()"))
# @lc code=end

