/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
// function summaryRanges(nums: number[]): string[] {
//     if (nums.length === 0) return []
//     const arr = [nums[0] + ''];
//     for(let i = 1; i < nums.length; i++) {
//       const items = arr[arr.length - 1].split('->')
//       const lastNum =  Number(items[items.length - 1])
//       // console.log(nums[i], lastNum)
//       if (nums[i] === lastNum + 1) {
//         arr[arr.length - 1] = `${items[0]}->${nums[i]}`
//       } else {
//         arr.push(nums[i] + '')
//       }
//     }
//     return arr;
// };

function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return []
  const arr = [nums[0] + ''];
  for(let i = 0; i < nums.length; i++) {
    // console.log(nums[i], nums[i + 1], nums[i + 1] === nums[i] + 1)
    // 判斷與下一個值是否連續，是連續的話跳過
    if (nums[i] + 1 === nums[i + 1]) {
      continue
    }
    // 不連續的話有兩件要做的事
    // 一種是要接在->後面
    // 把下一個的值當作第一個放入
    if (arr[arr.length - 1] !== nums[i] + '') {
      arr[arr.length - 1] += '->' + nums[i]
    }
    if (nums[i + 1] !== undefined) {
      arr.push(nums[i + 1] + '')
    }
  }
  return arr;
};
// console.log(summaryRanges([0,2,3,6,8,9]))
// @lc code=end

