/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

// 高度平衡的樹為每個節點的每個子樹深度距離都不能超過 1
// function isBalanced(root: TreeNode | null): boolean {
//   let res = true
//   function maxdp(root: TreeNode) {
//     if(!root || !res) {
//       return 0
//     }
//     let left = maxdp(root.left)
//     let right = maxdp(root.right)
//     if (Math.abs(left - right) > 1) {
//       res = false
//       return 0
//     }
//     return Math.max(left, right) + 1
//   }
//   maxdp(root)
//   return res;
// };

// with out variable
function isBalanced(root: TreeNode | null): boolean {
  function check(root: TreeNode) {
    if(!root) return 0
    let left = check(root.left)
    let right = check(root.right)
    if (left === -1) {
      return -1
    }
    if (right === -1) {
      return -1
    }
    if (Math.abs(left - right) > 1) {
      return -1
    }
    return Math.max(left, right) + 1
  }
  return check(root) !== -1
}

// @lc code=end

