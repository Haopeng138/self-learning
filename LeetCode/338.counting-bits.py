#
# @lc app=leetcode id=338 lang=python3
#
# [338] Counting Bits
#

# @lc code=start
from typing import List


class Solution:
    def countBits(self, n: int) -> List[int]:
        result = [0]
        for i in range(1,n+1):
            result.append(result[i>>1]+i%2)
        return result

        
        
# @lc code=end

# Logica: 
"""

"""