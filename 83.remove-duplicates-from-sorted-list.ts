/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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
//  class ListNode {
//      val: number
//        next: ListNode | null
//        constructor(val?: number, next?: ListNode | null) {
//            this.val = (val===undefined ? 0 : val)
//            this.next = (next===undefined ? null : next)
//        }
//   }

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null || head?.next === null) {
    return null
  }
  if (head?.val === head?.next?.val) {
    return head.next = deleteDuplicates(head?.next)
  }
  return head
};
// @lc code=end

