/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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

// BST 的特性
// 對於任何一個節點：
// 左子樹的所有節點值都小於該節點的值。
// 右子樹的所有節點值都大於該節點的值。
// 這使得 BST 的 中序遍歷 (in-order traversal) 結果會是一個 遞增的數列。
function getMinimumDifference(root: TreeNode | null): number {
    let preNum: number;
    let minnum: number;
    function inOrderTraversal(root: TreeNode) {
      if (!root) return;
      
      if (root.left) {
        inOrderTraversal(root.left);
      }
      if (preNum !== undefined) {
        if (minnum === undefined) {
          minnum = Math.abs(root.val - preNum)
        } else {
          if (Math.abs(root.val - preNum) < minnum) {
            minnum = Math.abs(root.val - preNum)
          }
        }
      }
      preNum = root.val;
      
      if (root.right) {
        inOrderTraversal(root.right);
      }
    }
    inOrderTraversal(root)
    return minnum
};
// @lc code=end

