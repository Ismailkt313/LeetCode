/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let i = 0
    let j = 0
    let sum = 0
    while(i < nums1.length){
        if(nums1[i] <= nums2[j] ){
            if((j-i) > sum){
                sum = j-i
            }
            j++
        }else{
            i++
            j++
        }
    }
    return sum
};