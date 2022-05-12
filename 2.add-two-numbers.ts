/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */


//Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// @lc code=start

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0;
    let parentNode: ListNode | null = null
    let hostNode: ListNode | null = null

    while (l1 || l2) {
        let val = (l1?.val | 0) + (l2?.val | 0) + carry
        carry = Math.floor(val / 10)
        val = val - carry * 10

        const nl = new ListNode(val)
        if (parentNode)
            parentNode.next = nl

        parentNode = nl
        if (!hostNode)
            hostNode = nl

        l1 = l1?.next; l2 = l2?.next
    }

    if (carry)
        parentNode.next = new ListNode(carry)

    return hostNode
}

// @lc code=end

/* First working 5/12/2022
 * Accepted
 ** 1568/1568 cases passed (115 ms)
 ** Your runtime beats 83.03 % of typescript submissions
 ** Your memory usage beats 83.32 % of typescript submissions (47.9 MB)
 */