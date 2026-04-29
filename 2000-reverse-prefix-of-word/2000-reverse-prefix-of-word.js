/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let first = []
    let second = ''
    let seen = false
if(!word.includes(ch)) return word
    for(let val of word){
        if(!seen){
            first.push(val)
        }
        if( seen){
            second += val
        }
        if(val == ch  && !seen){
            seen = true
        } 
    }
    let reversed = first.reverse().join('')
    return reversed+second
};