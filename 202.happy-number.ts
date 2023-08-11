/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const record = { [n]: 1 }

  function getNextHappyNumber() {
    const str = n.toString();
    let newN = 0
    for(let i = 0; i < str.length; i++) {
      newN += Number(str[i]) ** 2
    }
    return newN
  }
  
  while(record[n] === 1) {
    const _n = getNextHappyNumber()
    if (_n.toString() === (10 ** (_n.toString.length - 1)).toString()) {
      return true
    }
    if (record[_n] === 1) {
      return false
    }
    record[_n] = 1
    n = _n
  }

  return false

};
// console.log(isHappy(19))
// @lc code=end

