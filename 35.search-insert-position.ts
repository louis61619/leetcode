/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start

// 直接使用 for 迴圈
// function searchInsert(nums: number[], target: number): number {
//   for(let i = 0; i< nums.length; i++) {
//     if (nums[i] > target || nums[i] === target) {
//       return i
//     }
//   }
//   return nums.length
// };

// 二分搜索算法
function searchInsert(nums: number[], target: number): number {
  let min = 0;
  let max = nums.length - 1

  // 可以從中間切一半開始找
  while(true) {
    const middleIndex = Math.floor(nums.length / 2)
    const middle = nums[middleIndex]

    console.log(max)

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
      min = middleIndex
    } else if (middle === target) {
      return middleIndex
    } else {
      max = middleIndex
    }
  }
};
const a = searchInsert([1, 3, 5, 7, 9, 100, 103, 400], 100)
console.log(a)
// @lc code=end

