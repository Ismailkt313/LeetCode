/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let minVal = Math.min(...nums)
    let maxVal = Math.max(...nums)

    let arr = new Set(nums)
    let res = []
    for (let i=minVal;i<=maxVal;i++){
        if(!arr.has(i)){
            res.push(i)
        }
    }

    return res
};