/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let max = Math.max(...nums)
     let min = Math.min(...nums)
     if(max === min) return min
     for(let i= min ; i >= 1 ; i-- ){
        if(min % i === 0 && max % i === 0 ){
           return i
        }
     }
};