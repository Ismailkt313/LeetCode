/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let count = word.length
    if(count<=8) return count
    let val = count % 8
    if(count <= 16){
    if(val == 0 ) return count + 8
    return count + val
    }
    if(count < 24){
        let ab = val * 3
        return ab+ 8 + 16
    }
    if(count == 24){
        return 24 * 2
    }else{
        let ab = val * 4
        return ab + 24 + 8 + 16
        
    }
    
};