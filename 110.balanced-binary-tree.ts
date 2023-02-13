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

function isBalanced(root: TreeNode | null): boolean {
  let res = true
  function maxdp(root: TreeNode) {
    if(!root || !res) {
      return 0
    }
    let left = maxdp(root.left)
    let right = maxdp(root.right)
    return Math.abs(left - right) > 1 ? false : true
  }
  return maxdp(root)
};
// @lc code=end

