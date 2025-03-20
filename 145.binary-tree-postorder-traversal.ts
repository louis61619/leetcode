/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

// 先往右，再往左，中間最後
function postorderTraversal(root: TreeNode | null): number[] {
  const arr = []
  function traversal(root: TreeNode) {
    if (root?.left) {
      traversal(root.left)
    }
    if (root?.right) {
      traversal(root.right)
    }
    if (root?.val !== undefined) {
      arr.push(root.val)
    }
  }
  traversal(root)
  return arr
};
// @lc code=end

