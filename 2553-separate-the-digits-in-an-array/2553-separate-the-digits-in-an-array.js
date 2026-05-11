/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr = []
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] > 9){
            let val = nums[i].toString().split('')
            let num = val.map(a=>Number(a))
            arr = [...arr,...num]
        }else{
            arr.push(nums[i])
        }
    }
    return arr
};