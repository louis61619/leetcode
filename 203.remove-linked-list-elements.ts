/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
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

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   let node = head
//   while(node?.next) {
//     if (node.next.val === val) {
//       node.next = node.next.next
//     } else {
//       node = node.next
//     }
//   }
//   if (head?.val === val) {
//     head = head.next
//   }
//   return head
// };

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return null
  if (head.val === val) return removeElements(head.next, val)
  head.next = removeElements(head.next, val)
  return head
};
// @lc code=end

