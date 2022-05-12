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
    const val = unpack(l1) + unpack(l2)
    //const val = unpack(l1)

    return pack(val)
    //return new ListNode(val, null)
};

function pack(val: number): ListNode | null {
    let l = null
    let arr = val.toString().split("")
    for (let i = 0; i < arr.length; i++) {
        l = new ListNode(Number(arr[i]), l)
    }
    return l
}

function unpack(l: ListNode | null): number {
    let ret = 0
    let i = 0
    while (l) {
        ret += l.val * Math.pow(10, i)
        l = l.next
        i++
    }

    return ret
}

// @lc code=end

