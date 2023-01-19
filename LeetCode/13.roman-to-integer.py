#
# @lc app=leetcode id=13 lang=python3
#
# [13] Roman to Integer
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        romandict = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000
        }
        result = 0
        for n in s:
            result += romandict[n]
     
        if ("IV") in s or ("IX") in s : result -= 2
        if ("XL") in s or ("XC") in s : result-= 20 
        if ("CD") in s or ("CM") in s : result -= 200

        return result

a = Solution.romanToInt(Solution,"CD")
print(a)
# @lc code=end

# Idea:
# Map the Roman Character with their values, add all Roman Character and substract special cases. (-2 because "I" + "V" = 6 to get 4 we need to substract 2, same with other cases) 
