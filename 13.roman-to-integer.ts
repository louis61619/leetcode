/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
// ans1: 定義規則，O(n2)，也可以利用後面的符號大於前面的符號去判斷是否要做減法
// function romanToInt(s: string): number {
//   const roman: { [key: string]: number } = {
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
//   }
//   const expection: { [key: string]: string[] } = {
//     "I": ["V", "X"],
//     "X": ["L", "C"],
//     "C": ["D", "M"]
//   }
//   const arr = s.split('')
//   let total = 0
//   for(let i = 0; i < arr.length; i++) {
//     const expectionSymbols = expection[arr[i]]
//     if (expectionSymbols) {
//       const nextSymbol = arr[i + 1]
      
//       if (nextSymbol && expectionSymbols.indexOf(nextSymbol) !== -1) {
//         total -= roman[arr[i]]
//         continue
//       }
//     }
//     total += roman[arr[i]]
//   }
//   return total
// };

// ans2: 透過擷取字串的方式
const rules: { [key: string]: number } = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}
const arr = Object.keys(rules)
function romanToInt(s: string): number {
  let total = 0
  function next() {
    for(let i = 0; i < arr.length; i++) {
      if (s.startsWith(arr[i])) {
        total += rules[arr[i]]
        s = s.substring(arr[i].length)
        break
      }
    }
  }
  while(s) {
    next()
  }
  return total
}
// @lc code=end

