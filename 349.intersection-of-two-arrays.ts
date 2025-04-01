/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const maxLength = nums1.length > nums2.length ? nums1.length : nums2.length
    const arr = []
    const map = {}

    for(let i = 0; i < maxLength; i++) {
      if (nums1[i] !== undefined) {
        if (map[nums1[i]] === undefined) {
          map[nums1[i]] = 1
        } else {
          if (map[nums1[i]] === 2) {
            map[nums1[i]] += 1
            arr.push(nums1[i])
          }
        }
      }
      if (nums2[i] !== undefined) {
        if (map[nums2[i]] === undefined) {
          map[nums2[i]] = 2
        } else {
          if (map[nums2[i]] === 1) {
            map[nums2[i]] += 2
            arr.push(nums2[i])
          }
        }
      }
    }
  return arr
};
// @lc code=end

