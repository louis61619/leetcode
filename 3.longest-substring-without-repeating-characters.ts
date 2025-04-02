/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
// function lengthOfLongestSubstring(s: string): number {
//   if (!s.length) return 0;
//   // 找出每一個字到下一個重複的字的字數
//   const map = {}
//   let cur = 1
//   let t = 0;
//   for(let i = 0; i < s.length; i++) {
//     if (map[s[i]] === undefined) {
//       map[s[i]] = [i, i];
//     } else {
//       const [start, end] = map[s[i]];
//       if ((end - start) <= (i - end)) {
//         console.log(i, end)
//         if (i - end > cur) {
//           cur = i - end
          
//         }
//         map[s[i]] = [end, i]
//       }
//     }
//   }
//   // 找到重複字母去掉之後最長的段落
//   console.log(t)
//   return cur
// };

// 類似於額外維護一組最長的不重複字串，當遇到重複的字時，把重複前的字都去掉，同時紀錄每次修改時最大的值
function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;
  const map =  new Map();
  let maxLength = 0
  let left = 0;
  let right = 0;
  
  for(let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      // console.log(s[i], map.get(s[i]), left, right, s.substring(right, left))
      if (left < map.get(s[i]) + 1) {
        left = map.get(s[i]) + 1
      }
    }
    map.set(s[i], i)
    right = i
    // console.log(right, left, s.substring(right, left))
    if (right - left > maxLength) {
      maxLength = right - left
    }
  }
  return maxLength + 1
}
// console.log(lengthOfLongestSubstring("abba"))
// @lc code=end

