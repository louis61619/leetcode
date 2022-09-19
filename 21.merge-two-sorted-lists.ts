/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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


// 鏈表節點透過 next 來查找下一個節點
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2
  if (!list2) return list1

  if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  } else {
    list1.next = mergeTwoLists(list2, list1.next)
    return list1 
  }
};
// @lc code=end

