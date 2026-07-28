/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let current = root
    let a = Infinity
    let value= []
    function ab(val){
        if(!val) return 
        ab(val.left)
        value.push(val.val)
        ab(val.right) 
    }
    ab(current)
    for(let i = 1 ; i < value.length ; i++){
        a = Math.min(a,value[i] - value[i-1])
    }
    return a
};