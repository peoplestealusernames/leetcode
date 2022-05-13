/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const combine = nums1.concat(nums2).sort((a, b) => a > b ? 1 : -1)

    const mid = (combine.length - 1) / 2

    return (combine[Math.floor(mid)] + combine[Math.ceil(mid)]) / 2
};
// @lc code=end

/*
 * Accepted
 ** 2094/2094 cases passed (111 ms)
 ** Your runtime beats 87.49 % of typescript submissions
 ** Your memory usage beats 66.05 % of typescript submissions (48.1 MB)
 */