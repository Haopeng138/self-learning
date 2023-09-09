#
# @lc app=leetcode id=1 lang=python3
#
# [1] Two Sum
#
from typing import List
# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        vistos = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in vistos:
                return [vistos[diff], i]
            else:
                vistos[nums[i]] = i

nums = [2,7,11,15]
a = Solution.twoSum(Solution,nums=nums,target=9)
print(a)
# @lc code=end

# Problem solver idea:
# Iterate all the list, save the difference with de target in map, if exist in map return the result