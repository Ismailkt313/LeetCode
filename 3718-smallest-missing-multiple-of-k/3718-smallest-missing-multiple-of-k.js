/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let seen = new Set([...nums])
        for(let i = 1 ; i < Infinity ; i++){
            if(i%k==0 && !seen.has(i))return i
        }
};