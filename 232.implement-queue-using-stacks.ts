/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
    arr: number[] = []
    constructor() {
        
    }

    push(x: number): void {
        this.arr[this.arr.length] = x
    }

    pop(): number {
        const num = this.peek();
        // this.arr.length--
        for(let i = 0; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i + 1]
        }
        this.arr.length--
        return num
    }

    peek(): number {
        return  this.arr[0]
    }

    empty(): boolean {
        return this.arr.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

