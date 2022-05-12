/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];
        for (let k = i + 1; k < nums.length; k++)
            if (nums[k] == needed)
                return [i, k]
    }
};
// @lc code=end

