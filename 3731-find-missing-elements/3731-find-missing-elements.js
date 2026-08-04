/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {

    
    let minVal = Infinity
    let maxVal = -Infinity

    for(let i=0;i<nums.length;i++){
        if(nums[i]<minVal){
            minVal=nums[i]
        }
        if(nums[i]>maxVal){
            maxVal=nums[i]
        }
    }
    console.log(minVal,maxVal)

    let arr = new Set(nums)
    let res = []
    for (let i=minVal;i<=maxVal;i++){
        if(!arr.has(i)){
            res.push(i)
        }
    }

    return res
};