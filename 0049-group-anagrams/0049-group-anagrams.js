/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    let ans = []
    for(let val of strs){
        let sorted = val.split('').sort().join("")
        if(!obj[sorted]){
            obj[sorted] = []
        }
        obj[sorted].push(val)
    }
    return Object.values(obj)
};
