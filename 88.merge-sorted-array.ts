/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
// const num1 = [0]
// 暴力破解
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   for(let i = 0; i < m + n; i++) {
//     if (i < n) {
//       nums1.splice(m + i, 1, nums2[i])
//     }
//   }
//   // 冒泡排序
//   // 不斷進行當前的和下一個對比
//   // 會得出最後一個最大的
//   // 然後再不斷重跑 O(n2)
//   for(let i = 0; i < nums1.length; i++) {
//     for(let j = 0; j < nums1.length; j++) {
//       if (nums1[j] > nums1[j + 1]) {
//         let a = nums1[j + 1]
//         nums1[j + 1] = nums1[j]
//         nums1[j] = a
//       }
//     }
//   }
// };

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let cacheIndex = 0;
  for(let i = 0; i < m + n; i++) {
    let cache = nums2[cacheIndex]
    // if (cache === undefined) {
    //   nums1.shift()
    // }
    console.log(cache)
    if (i > m) {
      nums1.splice(i + 1, 1, cache)
      cacheIndex++
      continue
    }
    if (cache !== undefined && nums1[i] >= cache) {
      nums1.splice(i + 1, 0, cache)
      cacheIndex++
    }
  }
  console.log(nums1)
}

merge(
  [-1,0,1,1,0,0,0,0,0],
4,
[-1,0,2,2,3],
5
)
// @lc code=end

