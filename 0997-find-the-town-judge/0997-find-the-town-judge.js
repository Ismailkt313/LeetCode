/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(trust.length == 1){
        return trust[0][1]
    }
    if(!trust.length ){
        if(n == 1){
            return 1
        }else{
            return -1
        }
    }
    let obj = {}
    let persons = []
    for(let i = 0 ; i < trust.length ; i++){
        let judge = trust[i][1]
        let person = trust[i][0]
        let truejudge = false
        persons.push(person)
        if(!persons.includes(judge)){
            truejudge = true
        }
        if(!obj[judge] && truejudge){
            obj[judge] = []
        }
        if(truejudge){

        obj[judge].push(person)
        }
        if(obj.hasOwnProperty(person)){
             obj[person] = []
        }
    }
    console.log(obj)
    for(let key in obj){
        if(obj[key].length==n-1){
            return Number(key)
        }
    }
    return -1
};