/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
// 26進制
// function convertToTitle(columnNumber: number): string {
//   const alphbet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let strArr = [0]
//   for(let i = 0; i < columnNumber; i++) {
//     for(let j = 0; j < strArr.length; j++) {
      
//       if (strArr[j] >= 26) {
//         strArr[j] = 1
//         if (strArr[j + 1] === undefined) {
//           strArr.push(1)
//           break
//         }
//       } else {
//         strArr[j] += 1
//         break
//       }
      
//     }
//   }

//   return strArr.reduce((pre, cur) => {
//     return  alphbet[cur - 1] + pre
//   }, '')
// };
function convertToTitle(columnNumber: number): string {
  const alphbet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str = ''
  while(columnNumber > 0) {
    // 因為 26 對應 z 而非進位所以要特別減一
    let i = ((columnNumber - 1) % 26)
    str =  alphbet[i] + str
    columnNumber = Math.floor((columnNumber - 1) / 26)
    
  }
  return str
}
// 2147483647
// "FXSHRXW"
// @lc code=end

