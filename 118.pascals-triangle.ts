/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
// function generate(numRows: number): number[][] {
//   let arr: number[][] = []
//   for(let i = 0; i < numRows; i++) {
//     if (i - 1 > 0) {
//       const _arr = arr[i - 1].reduce((pre, cur, index, arr) => {
//         if (index === 0) {
//           return [...pre, cur]
//         }
//         if (index === arr.length - 1) {
//           return [...pre, cur + arr[index - 1], cur]
//         }
//         return [...pre, cur + arr[index - 1]]
//       }, [])
//       arr.push(_arr)
//     } else if (i === 1) {
//       arr.push([1, 1])
//     } else  {
//       arr.push([1])
//     }
//   }
//   return arr 
// };

function generate(numRows: number): number[][] {
  
};
// console.log(generate(5))
// @lc code=end

