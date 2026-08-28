/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function reverse(li){
        let current = li
        let prev = null
        while(current){
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return prev
    }
    let r1 = reverse(l1)
    let r2 = reverse(l2)
    function sum(l1,l2){
        let s1 = '' 
        let cur1 = l1
        while(cur1){
            s1 += cur1.val
            cur1 = cur1.next
         }
        let s2 = ''
        let cur2 = l2
        while(cur2){
            s2 += cur2.val
            cur2 = cur2.next
        }
          return (BigInt(s1) + BigInt(s2)).toString()
    }
    let total = sum(r1,r2)
 function stringToList(str){
        let Node = new ListNode(5)
        let current = Node
        let i = 0
        while(str.length>i){
            let node = new ListNode(Number(str[i]))
            current.next = node
            current = current.next
            i++
        }
        return Node.next
    }
    let newList = stringToList(total)
    return reverse(newList)
};