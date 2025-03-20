/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  
  function traverse(head: ListNode | null, arr = []): number[] {
    if (!head) {
      return arr;
    }
    arr.push(head.val)
    if (!head.next) {
      return arr
    }
    return traverse(head.next, arr)
  }
  const arr = traverse(head, [])
  let curHead = head
  for(let i = arr.length - 1; i >= 0; i--) {
    curHead.val = arr[i]
    curHead = curHead.next
  }

  return head
};

// @lc code=end

