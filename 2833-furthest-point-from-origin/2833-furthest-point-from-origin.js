/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let an = ''
    let obj = {}
    let ab = {}
    for(let i of moves){ 
        ab[i] = (ab[i] || 0 ) + 1
    }
    for(let i = 0 ; i < moves.length ; i++){
        if(moves[i]==='_'){
            if(ab['L'] > ab['R'] || ab['L'] == ab['R']){
                an += 'L'
            }else if(ab['L'] < ab['R']){
                an += 'R'
            }else if(!ab.hasOwnProperty('L')){
                an += 'R'
            }else{
                an += 'L'
            }
        }else{
            an += moves[i]
        }
    }
    for(let i of an){
        obj[i] = (obj[i] || 0 ) + 1
    }
    console.log(an)
    if(!obj['R']){
        return obj['L']
    }else if(!obj['L']){
        return obj['R']
    }else{
        return Math.abs(obj['L'] - obj['R'])
    }
};