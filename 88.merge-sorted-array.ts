/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */

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

// 由大到小去排
// 從後面去排不會動到順序的問題
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let nums1Index = m - 1
  let nums2Index = n - 1
  let allIndex = m + n - 1
  while (nums1Index >= 0 && nums2Index >= 0 && allIndex >= 0) {
    if (nums1[nums1Index] >= nums2[nums2Index]) {
      // 放大的
      nums1[allIndex] = nums1[nums1Index]
      nums1Index--
      allIndex--
      // console.log('---a')
    }

    if (nums2[nums2Index] > nums1[nums1Index]) {
      nums1[allIndex] = nums2[nums2Index]
      nums2Index--
      allIndex--
      // console.log('---b')
    }

    // console.log(nums1, nums1Index, nums2Index, allIndex, '---c')
  }

  while(nums2Index >= 0) {
    // console.log(allIndex, nums2Index)
    nums1[allIndex] = nums2[nums2Index]
    nums2Index--
    allIndex--
  }
  // console.log(nums1)
}

// merge(
//   [1,2,3,0,0,0],
// 3,
// [2,5,6],
// 3
// )
// @lc code=end

