/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
// function strStr(haystack: string, needle: string): number {
//   for(let i = 0; i < haystack.length; i++) {
//     if (haystack.slice(i, i + needle.length) === needle) {
//       return i;
//     }
//   }
//   return -1
// };
// optimization
function strStr(haystack: string, needle: string): number {
  for(let i = 0; i < (haystack.length - needle.length + 1); i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1
};
// @lc code=end

