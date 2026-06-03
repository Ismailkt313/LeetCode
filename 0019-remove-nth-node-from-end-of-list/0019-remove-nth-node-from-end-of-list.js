/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let rever = reverse(head)
    let current = rever
    let i = 0
    if(n==1){
        rever = current.next
    }
    while(i < n-2){
        current = current.next
        i++
    }
    if(current.next){
        current.next = current.next.next
    }
    return reverse(rever)
};

function reverse(head){
    let current = head
    let prev = null
    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}