/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let MorseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let alphabets = "abcdefghijklmnopqrstuvwxyz".split('')
    let morsecode = Object.fromEntries(alphabets.map((a,b)=>[a,MorseCode[b]]))
     let obj = {}
     for(let i = 0 ; i < words.length ; i++){
        if(!obj[words[i]]){
            obj[words[i]] = ''
            for(let j = 0 ; j < words[i].length ; j++){
                let code = morsecode[words[i][j]]
                obj[words[i]] += code
            }
        }
     }
     let count = 0
     let set = new Set()
     for(let key in obj){
        if(!set.has(obj[key])){
            count++
            set.add(obj[key])
        }
     }
     return count
};