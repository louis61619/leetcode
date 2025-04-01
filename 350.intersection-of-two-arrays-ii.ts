/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const obj1 = {}
  for(let i = 0; i < nums1.length; i++) {
    if(obj1[nums1[i]] === undefined) {
      obj1[nums1[i]] = 1
    } else {
      obj1[nums1[i]] += 1
    }
  }
  const arr = []
  for(let i = 0; i < nums2.length; i++) {
    if (obj1[nums2[i]]) {
      arr.push(nums2[i])
      obj1[nums2[i]] -= 1
    }
  }
  return arr
};
// @lc code=end

