/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let largest = 0;
    let start = 0;

    // 0 1 2 3 4 5 6 7
    // a b c a b c b b

    for (let i = 0; i < s.length; i++) {
        const at = s.indexOf(s[i], start)
        if (at != -1 && at < i) {
            largest = i - start > largest ? i - start : largest
            start = at + 1
        }
    }

    //return largest
    return s.length - start > largest ? s.length - start : largest
};

// @lc code=end

/* working: 5/13/2022
 * Accepted
 ** 987/987 cases passed (76 ms)
 ** Your runtime beats 98.98 % of typescript submissions
 ** Your memory usage beats 98.79 % of typescript submissions (44.8 MB)
 */