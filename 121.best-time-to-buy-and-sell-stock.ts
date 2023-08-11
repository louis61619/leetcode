/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start

// 以後記得換一個角度思考，我是用最小值為基準去比對後面的值，但更簡單的方式是以最大值為基準去迭代
function maxProfit(prices: number[]): number {
  let min = prices[0]
  let max = 0;
  for(let i = 0; i < prices.length; i++) {
    // 比對當前值是不是比舊值小
    min = Math.min(prices[i], min)
    // 比對當前值減掉最小值是不是比舊值大
    max = Math.max(max, prices[i] - min)
  }
  return max
}

// 最簡單的思路
// 以第一個為基點依次尋找之後的最大值 這邊只要找到在此之後的最大值就好
// 所以儘量能在一次 for 迴圈跑完
// 然後就可以對比每個基點之後的最大值差距了
// function maxProfit(prices: number[]): number {
//   // let minIndex = 0;
//   let maxIndex = 0
  
//   const arr: number[] = []
//   for(let i = 0; i < prices.length; i++) {
//     let minIndex = i;
//     // let maxIndex = minIndex;
    
//     // 紀錄最大值位置，如果小於或是等於預設的最小值位置就重新找
//     if (maxIndex <= minIndex) {
//       maxIndex = minIndex
//       for(let j = i; j < prices.length; j++) {
//         if (prices[j] > prices[maxIndex]) {
//           maxIndex = j
//         }
//       }
//     }
//     // 最後還是這樣的話就返回 0
//     if (maxIndex <= minIndex) {
//       arr.push(0)
//     } else {
//       arr.push(prices[maxIndex] - prices[minIndex])
//     }
    
//   }
//   // console.log(arr)
//   let maxVal = 0
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > maxVal) {
//       maxVal = arr[i]
//     }
//   }
//   return maxVal
// }


// @lc code=end

