/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

// 紀錄每層的加總值不斷往下找
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  
  function getSum(root: TreeNode, val: number) {
    if (!root) {
      return false
    }
    val = val + root.val
    if(!root.left && !root.right) {
      return val === targetSum
    } else {
      return getSum(root.left, val) || getSum(root.right, val)
    }
  }

  return getSum(root, 0)
};
// @lc code=end

