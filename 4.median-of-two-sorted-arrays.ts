/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    //const combine = nums1.concat(nums2).sort((a, b) => a > b ? 1 : -1)
    let combine: number[] = []
    let x: number = 0
    let y: number = 0

    while (x < nums1.length && y < nums2.length) {
        if (nums1[x] < nums2[y]) {
            combine.push(nums1[x])
            x++
        } else {
            combine.push(nums2[y])
            y++
        }
    }

    for (; x < nums1.length; x++)
        combine.push(nums1[x])

    for (; y < nums2.length; y++)
        combine.push(nums2[y])


    const mid = (combine.length - 1) / 2

    return (combine[Math.floor(mid)] + combine[Math.ceil(mid)]) / 2
};
// @lc code=end

/*
 * Accepted
 ** 2094/2094 cases passed (105 ms)
 ** Your runtime beats 93.16 % of typescript submissions
 ** Your memory usage beats 76.59 % of typescript submissions (47.5 MB)
 */