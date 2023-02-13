/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */


// @lc code=start
// pointer 方法
function isPalindrome(s: string): boolean {

  function isLetters( str: string ){
    var re=/^[0-9A-Za-z]+$/;
    if (str.match(re) == null)
        return false;
    else
        return true;
  }

  let left = 0;
  let right = s.length - 1;
  // console.log(left > right)
  while (left < right) {
    
    const leftString = s[left].toLocaleLowerCase()
    const rightString = s[right].toLocaleLowerCase()
    
    console.log(leftString, rightString)
    if (!isLetters(leftString)) {
      left++
      continue
    }
    if (!isLetters(rightString)) {
      right--
      continue
    }
    if(leftString !== rightString) {
      left++
      right--
      return false
    } else {
      left++
      right--
    }
  }
  return true
};
// const a = isPalindrome("0P")
// console.log(a)
// @lc code=end

export {}