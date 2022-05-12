/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let largest = 0;
    let found = ""

    // 0 1 2 3 4 5 6 7
    // a b c a b c b b

    for (let i = 0; i < s.length; i++) {
        const at = found.indexOf(s[i])
        if (at != -1) {
            const leng = found.length
            if (leng > largest) largest = leng
            found = found.slice(at + 1)
        }
        found += s[i]
    }

    const leng = found.length
    if (leng > largest) largest = leng

    return largest
};

// @lc code=end

/* working: 5/12/2022
 * Accepted
 ** 987/987 cases passed (96 ms)
 ** Your runtime beats 87.42 % of typescript submissions
 ** Your memory usage beats 57.67 % of typescript submissions (48.7 MB)
 */