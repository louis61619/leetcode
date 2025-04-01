/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let firstPointer = 0;
  let lastPointer = s.length - 1;
  while(firstPointer < lastPointer) {
    const firstN = s[firstPointer]
    s[firstPointer] = s[lastPointer]
    s[lastPointer] = firstN

    firstPointer += 1;
    lastPointer -= 1
  }
};
// @lc code=end

