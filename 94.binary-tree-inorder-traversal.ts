/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

// Inorder traversal 的概念用一句話解釋就是先走訪左子樹，再走訪父節點，再走訪右子樹
// 左邊節點沒有就父節點然後往右
// 遞迴
function inorderTraversal(root: TreeNode | null): number[] {

  if (!root) {
    return []
  }
  
  function _inorderTraversal(node: any, arr: number[] = []) {

    if (!node){
      return []
    }

    _inorderTraversal(node.left, arr)
    arr.push(node.val)
    _inorderTraversal(node.right, arr)

    return arr
  }
  
 return  _inorderTraversal(root)
};
// @lc code=end

