/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function genNode(val: number): TreeNode {
    return {
      val,
      left: null,
      right: null
    }
  }

  function arrToBST(nums: number[], startIndex: number, endIndex: number, node?: TreeNode): TreeNode {
    if (startIndex > endIndex) {
      return node
    }
    const middleIndex = Math.ceil((startIndex + endIndex) / 2)
    node = genNode(nums[middleIndex])
    // 左節點
    node.left = arrToBST(nums, startIndex, middleIndex - 1, node.left)
    // 右節點
    node.right = arrToBST(nums, middleIndex + 1, endIndex, node.right)
    return node
  }
  return arrToBST(nums, 0, nums.length - 1)
};
// @lc code=end

