/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 這題的意思是找出最小深度
// function minDepth(root: TreeNode | null): number {
//   function check(root: TreeNode) {
//     if(!root) {
//       return 0
//     }
//     let left = check(root.left)
//     let right = check(root.right)
//     // 如果只存在一邊子樹要取最大值因為無法對比
//     if (left === 0) {
//       return right + 1
//     }
//     if (right === 0) {
//       return left + 1
//     }
//     return Math.min(left, right) + 1
//   }
//   return check(root)
// };

// 上面由於遞迴調用會出現空間溢出，更好的方式是執行遍歷返回第一個遇到的葉節點
function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const q: [TreeNode, number][] = [[root, 1]];
  while(q.length) {
    const item = q.shift()
    const node = item[0]
    const depth = item[1]
    // 如果左右子樹都為空 直接回傳當前深度
    if(!node.right && !node.left) {
      return depth
    }
    if (node.left) {
      q.push([
        node.left,
        depth + 1
      ])
    }
    if (node.right) {
      q.push([
        node.right,
        depth + 1
      ])
    }
  }
};
// @lc code=end

