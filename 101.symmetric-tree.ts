/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

// 思路是判斷 左子樹的左=右子樹的右 右子樹的左=左子樹的右
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  function check(l: TreeNode | null, r: TreeNode | null) {
    if(!l && !r) return true
    if(!l || !r) return false
    if (l.val !== r.val) return false
    return check(l.left, r.right) && check(l.right, r.left)
  }
  return check(root.left, root.right)
};
// @lc code=end

