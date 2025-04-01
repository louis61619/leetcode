/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
  const vowelsMap = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1,
  }
  const sArr = s.split('')
  let firstPointer = 0
  let lastPointer = sArr.length - 1;
  while(firstPointer < lastPointer) {
    const firstN = sArr[firstPointer]
    const lastN = sArr[lastPointer]
    if (vowelsMap[firstN] && vowelsMap[lastN]) {
      sArr[firstPointer] = lastN
      sArr[lastPointer] = firstN
      firstPointer += 1
      lastPointer -= 1
    } else {
      if (!vowelsMap[firstN]) {
        firstPointer += 1
      }
      if (!vowelsMap[lastN]) {
        lastPointer -= 1
      }
    }
  }
  return sArr.join('')
};
// @lc code=end

