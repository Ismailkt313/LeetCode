/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    for(let i = n ; i < Infinity ; i++){
        let val = i.toString().split("").map((a)=>Number(a)).reduce((acc,curr)=>acc*curr,1)
        if(val % t == 0){
            return i
        }
    }
};