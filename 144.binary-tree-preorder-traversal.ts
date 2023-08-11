/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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

function preorderTraversal(root: TreeNode | null): number[] {
  const arr = []
  function traversal(root: TreeNode) {
    if (root?.val !== undefined) {
      arr.push(root?.val)
    }
    if (root?.left) {
      traversal(root.left)
    }
    if (root?.right) {
      traversal(root.right)
    }
    
  }
  traversal(root)
  return arr
};
// @lc code=end

