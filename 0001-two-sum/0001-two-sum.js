/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let abc = {}
    for(let i = 0 ; i < nums.length ; i++){
        let val = target - nums[i]
        if(abc.hasOwnProperty(val)){
            return [abc[val],i]
        }else{
            abc[nums[i]]=i
        }
    }
};