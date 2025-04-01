/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// var guess: (n: number) => number = (n) => {
//   let cur = 6
//   if (n > cur) {
//     return -1
//   } else if (n < cur) {
//     return 1
//   } else {
//     return 0
//   }
// }
function guessNumber(n: number): number {
  let max = n;
  let min = 0;
  while(min + 1 !== max) {
    const mid = Math.floor((max - min) / 2) + min
    const r = guess(mid)
    if (r === 1) {
      min = mid
    } else if (r === -1) {
      max = mid
    } else {
      return mid
    }
  }
  return n;
};
// console.log(guessNumber(10))
// @lc code=end

