/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let largest = 0;

    for (let i = 0; i < s.length; i++) {
        const run = untilRepeat(s.substring(i, s.length))
        if (run > largest) largest = run
    }

    return largest
};

function untilRepeat(s: string): number {
    let found = ""
    let i = 0

    for (; i < s.length; i++)
        if (found.includes(s[i]))
            return i
        else
            found += s[i]

    return i
}
// @lc code=end

/* working: 5/12/2022
 * Accepted
 ** 987/987 cases passed (534 ms)
 ** Your runtime beats 15.35 % of typescript submissions
 ** Your memory usage beats 18.65 % of typescript submissions (50.6 MB)
 */