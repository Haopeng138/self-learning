#
# @lc app=leetcode id=3 lang=python3
#
# [3] Longest Substring Without Repeating Characters
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if not s:
            return 0
        
        max_len = 0
        start = 0
        end = len(s) - 1
        while start <= end:
            if end - start + 1 < max_len:
                break
            if self.is_unique(s, start, end):
                max_len = max(max_len, end - start + 1)
            start += 1
            end = len(s) - 1
        return max_len
# @lc code=end

