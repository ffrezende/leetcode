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
var deleteDuplicates = function (head) {
  if (head?.next == null) return head

  let currentElement = head

  while (true) {
    let nextElement = currentElement.next

    if (nextElement == null) break

    if (currentElement.val == nextElement.val) {
      currentElement.next = nextElement.next
    } else currentElement = currentElement.next
  }

  return head
}
