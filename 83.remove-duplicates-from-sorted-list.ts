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

// let c: any;
// let b: ListNode;
// [1, 1, 1, 2, 3].forEach(x => {
// 	if (c) {
// 		b.next = new ListNode(x)
// 		b = b.next
// 		return
// 	}
// 	c = b = new ListNode(x)
// })

// myPrint(c)

// const a =  deleteDuplicates(c)

// function myPrint(a: ListNode | null) {
// 	let b = a
//   if (!b?.next) {
//     return
//   }
// 	while(b.next) {
// 		console.log(b.val)
// 		b = b.next
// 	}
// 	console.log(b.val, 'finish')
// }

// myPrint(a)

/**
 * 具體邏輯應該是
 * 找下一個節點並判斷是否等於現在的節點，如果等於就刪掉再找下一個節點，直到不等於為止
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head?.next) {
	  return head
	}
	if (head?.val === head?.next?.val) {
    if (head.next) {
      head.next = head.next.next 
      deleteDuplicates(head)
    }
	} else {
		deleteDuplicates(head.next)
	}
  return head
};

// function deleteDuplicates(head: ListNode | null): ListNode | null {
//   let a = head
//   let b: any = a
//   while(b?.next) {
//     if (b?.val === b?.next?.val) {
//       if (b?.next) {
//         b.next = b?.next?.next
//       }
//     } else {
//       b = b?.next
//     }
//   }
//   return a
// };
// @lc code=end

