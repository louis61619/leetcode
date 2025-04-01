/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
// 二分搜尋法
var solution = function(isBadVersion: any) {
    
    return function(n: number): number {
        let lastBadVersion = n;
        let firstGoodVersion = 0
        
        while(firstGoodVersion + 1 < lastBadVersion) {
            const checkVersion = Math.floor((lastBadVersion - firstGoodVersion) / 2) + firstGoodVersion
            if (isBadVersion(checkVersion)) {
                lastBadVersion = checkVersion
            } else {
                firstGoodVersion = checkVersion
            }
        }
        return lastBadVersion
        // return isBadVersion(n)
    };
};
// @lc code=end

