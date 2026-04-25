/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const largest = -Infinity
    let length = nums.length
    for(let i = Math.floor((length-2)/2) ; i >= 0 ; i--){
        heapfy(length,i,nums)
    }
    for(let j = length-1 ; j > length - k ; j--){
    [nums[0],nums[j]]=[nums[j],nums[0]]
        heapfy(j,0,nums)
    }
    return nums[0]
};
function heapfy(length , i , arr){
    let larggest = i
    let left = (i * 2) + 1
    let right = (i * 2 ) + 2
        if(left < length && arr[left] > arr[larggest]){
            larggest = left
        }
        if(right < length && arr[right] > arr[larggest]){
            larggest = right
        }
        if(larggest!= i){
        [arr[i],arr[larggest]]=[arr[larggest],arr[i]]
        heapfy(length,larggest,arr)
        }
}