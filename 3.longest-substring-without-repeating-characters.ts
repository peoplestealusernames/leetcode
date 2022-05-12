/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let largest = 0;

    for (let i = 0; i < s.length; i++)
        largest = Math.max(untilRepeat(s.substring(i, s.length)), largest)

    return largest
};

function untilRepeat(s: string): number {
    let found: { [key: string]: boolean } = {}
    let i = 0

    for (; i < s.length; i++)
        if (found[s[i]])
            return i
        else
            found[s[i]] = true

    return i
}
// @lc code=end

/* working: 5/12/2022
 * Accepted
 ** 987/987 cases passed (967 ms)
 ** Your runtime beats 5.98 % of typescript submissions
 ** Your memory usage beats 5.13 % of typescript submissions (97.8 MB)
 */