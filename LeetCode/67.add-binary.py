#
# @lc app=leetcode id=67 lang=python3
#
# [67] Add Binary
#

# @lc code=start
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        diff = len(a) - len(b)
        if diff > 0:
            for x in range(0,diff-1):
                b = '0' + b
        elif diff < 0:
             for x in range(0,abs(diff)):
                b = '0' + b
        carry = 0
        result = ''
        print(a)
        print(b)
        for x in range(0,max(len(a),len(b))):
            result += 3

            
# @lc code=end

