/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj = {}
    let obj1 = {}
    console.log(Object.entries(obj).length,Object.entries(obj1).length)
    for(let val of s) obj[val]=(obj[val]||0)+1
    for(let val of t) obj1[val]=(obj1[val]||0)+1
    if(Object.entries(obj).length != Object.entries(obj1).length){
        return false
    }
    for(let val in obj) {
        if(obj[val] != obj1[val]){
              return false
              }
    }
    return true 
};