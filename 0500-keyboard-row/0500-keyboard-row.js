/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let obj = {
        first : "qwertyuiopQWERTYUIOP",
        second : "asdfghjklASDFGHJKL",
        third : "zxcvbnmZXCVBNM"
    }
    let ans = []
    for(let i = 0 ; i < words.length; i++){
        let a = false
        let b = false
        let c = false
        for(let j = 0 ; j < words[i].length ; j++){
            if(j==0){
                if(obj["first"].includes(words[i][j])){
                    a = true
                }else if(obj["second"].includes(words[i][j])){
                    b = true
                }else if(obj["third"].includes(words[i][j])){
                    c = true
                }
            }else{
                if(a){
                    if(!obj["first"].includes(words[i][j])){
                        a = false
                    break
                }
                }
                if(b){
                    if(!obj["second"].includes(words[i][j])){
                        b = false
                    break
                }
                }
                if(c){
                    if(!obj["third"].includes(words[i][j])){
                        c = false
                    break
                }
            }
            }
        }
        if(a || b || c){
            ans.push(words[i])
        }
    }
    return ans
};