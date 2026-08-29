/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // if(s.length > 10000) return
    let seen = new Set()
    let count = 0
    let heighstCount = 0
    let start = 0
    for(let i = 0;  i < s.length ; i++){
        if(seen.has(s[i])){
            seen.clear()
            if(count > heighstCount){
                heighstCount = count
            }
            count = 0
            i = start 
             start = i+1
        }else{

            count += 1
            seen.add(s[i])
        }
        
    }
    return heighstCount > count ? heighstCount : count
};