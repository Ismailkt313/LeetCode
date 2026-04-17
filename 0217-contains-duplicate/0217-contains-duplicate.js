/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    for(let val of nums){
        if(obj[val]) return true
        obj[val]=true
    }
    return false
};