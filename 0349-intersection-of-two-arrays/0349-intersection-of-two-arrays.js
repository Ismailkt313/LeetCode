/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let nums = new Set(nums1)
    let num = new Set(nums2)
    let ans = []
    for(let i of nums){
        if(num.has(i)){
            ans.push(i)
        }
    }
    return ans
};