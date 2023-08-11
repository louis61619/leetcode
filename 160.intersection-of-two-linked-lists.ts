/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const map = new Set()
  function linkedListToMap(head: ListNode) {
    if(head) {
      // obj[head.val] = true
      map.add(head)
    }
    if(head.next) {
      linkedListToMap(head.next)
    }
  }
  linkedListToMap(headA)
  let cur = headB
  if(map.has(cur)) return cur
  while(cur.next) {
    cur = cur.next
    if (map.has(cur)) return cur
  }
  return null
};
// @lc code=end

