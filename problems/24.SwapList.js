/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let first = head
  let second = head.next
  let newHead = second

  while (true) {
    first.next = second.next
    second.next = fist
    if (!first.next || !first.next.next) break

    first = first.next.next
    second = first.next
  }

  return newHead
}
