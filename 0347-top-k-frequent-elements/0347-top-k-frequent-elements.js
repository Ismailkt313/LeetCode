/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   let obj = {}
   for(let val of nums){
    obj[val] = (obj[val] || 0) + 1
   }
   const sorted = Object.entries(obj).sort(([,a],[,b])=>b-a)
   let ans = []
   for(let i = 0 ; i < k ; i++){
    ans.push(Number(sorted[i][0]))
   }
   return ans
};
