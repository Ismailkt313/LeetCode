/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) return true
    for(let i = 0 ; i < flowerbed.length ; i++){
         if(n > 0 && i==0 && flowerbed[i+1]==0 && flowerbed[i]==0){
            flowerbed[i] = 1
            n--
        }else if(n > 0 && flowerbed[i]==0 && flowerbed[i-1]==0){
            if( flowerbed[i+1] ==0 || flowerbed[i+1] == undefined){
                flowerbed[i]=1
                n--
            }
        }
    }
     if(n==0){
        return true
    }
    return false
};