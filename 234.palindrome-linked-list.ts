/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

// function isPalindrome(head: ListNode | null): boolean {
//   if (!head) return false
//   let str = '';
//   let reverseStr = '';
//   function traverse(head: ListNode | null) {
//     if (!head) return;
//     str += head.val;
//     reverseStr = head.val + reverseStr
//     traverse(head.next)
//   };
//   traverse(head);
//   // slice 時間複雜度 o(n)，所以這邊是 o(2n)
//   if(str.slice(0, Math.floor(str.length / 2)) === reverseStr.slice(0, Math.floor(str.length / 2))) {
//     return true
//   }
//   return false
// };

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return false
  let str = '';
  function traverse(head: ListNode | null) {
    if (!head) return;
    str += head.val;
    traverse(head.next)
  };
  traverse(head);
  let secondePointer = str.length - 1
  for(let i = 0; i < str.length; i++) {
    if (i >= secondePointer) {
      return true;
    }
    if (str[i] !== str[secondePointer]) {
      return false;
    }
    secondePointer--
  }
  return true
};
// @lc code=end

