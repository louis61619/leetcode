/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

// function hasCycle(head: ListNode | null): boolean {
  
//   let cur = head
//   const arr = [cur]

//   while(cur?.next) {
//     cur = cur.next
//     if (arr.includes(cur)) {
//       return true
//     }
//     arr.push(cur)
//   }
//   return false
// };

// use Set
function hasCycle(head: ListNode | null): boolean {
  
  let cur = head
  const arr = [cur]

  while(cur?.next) {
    cur = cur.next
    if (arr.includes(cur)) {
      return true
    }
    arr.push(cur)
  }
  return false
};
// @lc code=end

