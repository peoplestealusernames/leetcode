/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let combine: number[] = new Array(nums1.length + nums2.length)
    let x: number = 0
    let y: number = 0
    let i: number = 0

    while (x < nums1.length && y < nums2.length)
        if (nums1[x] < nums2[y]) {
            combine[i++] = nums1[x++]
        } else
            combine[i++] = nums2[y++]

    while (x < nums1.length) combine[i++] = nums1[x++]
    while (y < nums2.length) combine[i++] = nums2[y++]

    //console.log(combine);

    const mid = (i - 1) / 2

    return (combine[Math.floor(mid)] + combine[Math.ceil(mid)]) / 2
};
// @lc code=end

/*
 * Accepted
 ** 2094/2094 cases passed (90 ms)
 ** Your runtime beats 99.3 % of typescript submissions
 ** Your memory usage beats 98.71 % of typescript submissions (46.4 MB)
 */