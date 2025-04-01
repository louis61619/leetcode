/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
    arr: number[] = []
    constructor(nums: number[]) {
        this.arr = nums
    }

    sumRange(left: number, right: number): number {
        let total = 0;

        for(let i = left; i < this.arr.length; i++) {
            if (i <= right) {
                total += this.arr[i]
            }
        }

        return total
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

