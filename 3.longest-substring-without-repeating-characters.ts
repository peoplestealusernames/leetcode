/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let largest = 0;
    let start = 0;
    let found: { [key: number]: number } = {}

    // 0 1 2 3 4 5 6 7
    // a b c a b c b b

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i)
        const at = found[c] + 1
        if (at > start) {
            largest = (i - start) > largest ? i - start : largest
            start = at
        }
        found[c] = i
    }

    //return largest
    return (s.length - start) > largest ? s.length - start : largest
};

// @lc code=end

/* working: 5/13/2022
 * Accepted
 ** 987/987 cases passed (81 ms)
 ** Your runtime beats 96.7 % of typescript submissions
 ** Your memory usage beats 99.76 % of typescript submissions (44.7 MB)
 */