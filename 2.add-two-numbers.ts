/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

// 給兩個單向鏈表，從第一個節點加到最後一個節點，如果進位下一個節點加一
// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     let l1CurNode = l1;
//     let l2CurNode = l2;
//     let needAddOne = false;
//     if (!l1CurNode) {
//       return l2
//     }
//     while(true) {
      
//       l1CurNode.val += l2CurNode ? l2CurNode.val : 0;
//       if (needAddOne) {
//         l1CurNode.val += 1
//       }
//       if (l1CurNode.val >= 10) {
//         l1CurNode.val -= 10
//         needAddOne = true
//       } else {
//         needAddOne = false
//       }
//       if (!l1CurNode?.next && !l2CurNode?.next) {
//         if (needAddOne) {
//           l2.next = null;
//           l2.val = 1
//           l1CurNode.next = l2
//         }
//         return l1
//       }
//       if (!l1CurNode.next) {
//         l1CurNode.next = l2CurNode.next;
//         l2CurNode.next = null;
//       }
//       l1CurNode = l1CurNode?.next ? l1CurNode.next : l2CurNode.next
//       l2CurNode = l2CurNode?.next ? l2CurNode.next : undefined
      
//     }
// };

// 使用遞迴
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {
  if (!l1 && !l2 && carry === 0) return null
  let total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
  if (total >= 10) {
    total -= 10;
    carry = 1
  } else {
    carry = 0
  }
  return new ListNode(total, addTwoNumbers(l1?.next || null, l2?.next || null, carry))
};
// @lc code=end

