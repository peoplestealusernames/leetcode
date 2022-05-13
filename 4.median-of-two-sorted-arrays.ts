/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const combine = nums1.concat(nums2).sort((a, b) => a > b ? 1 : -1)

    const mid = (combine.length - 1) / 2

    if (mid % 1 == 0)
        return combine[mid]
    else {
        let n = combine[Math.floor(mid)]
        n += combine[Math.ceil(mid)]
        return n / 2
    }
};
// @lc code=end

/*
 * Accepted
 ** 2094/2094 cases passed (118 ms)
 ** Your runtime beats 81.34 % of typescript submissions
 ** Your memory usage beats 53.65 % of typescript submissions (48.5 MB)
 */