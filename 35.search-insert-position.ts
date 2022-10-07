/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start

// 直接使用 for 迴圈
// function searchInsert2(nums: number[], target: number): number {
//   for(let i = 0; i< nums.length; i++) {
//     if (nums[i] > target || nums[i] === target) {
//       return i
//     }
//   }
//   return nums.length
// };

// function timeit(func: () => any) {
//   const start =  new Date().getTime()
//   func()
//   const end = new Date().getTime()
//   return (end - start)
// }

// 二分搜索
function searchInsert(nums: number[], target: number): number {
  let min = 0;
  let max = nums.length - 1

  // 可以從中間切一半開始找
  while(true) {
    const middleIndex = Math.floor((max - min) / 2) + min
    const middle = nums[middleIndex]

    // 額外判斷只有兩個 item 的陣列
    if(max - min <= 1) {
      if (target <= nums[min]) {
        return min
      } else if (target <= nums[max]) {
        return max
      } else {
        return max + 1
      }
    }

    if (middle > target) {
      max = middleIndex
    } else if (middle === target) {
      return middleIndex
    } else {
      min = middleIndex
    }
  }
};

// const a = 1000000
// const arr = [...new Array(a)].map((item, index) => index)
// // 111 豪妙
// console.log(timeit(() => searchInsert2(arr, a)))
// // 0 毫秒
// console.log(timeit(() => searchInsert(arr, a)))
// @lc code=end

