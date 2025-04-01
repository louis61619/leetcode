/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const arr = []
  function traversal(root: TreeNode | null, path = []) {
    if (!root.left && !root.right) {
      arr.push([...path, root.val].join('->'))
      return
    };
    if (root.left) {
      traversal(root.left, [...path, root.val])
    }
    if (root.right) {
      traversal(root.right, [...path, root.val])
    }
  }
  traversal(root)
  return arr
};
// @lc code=end

