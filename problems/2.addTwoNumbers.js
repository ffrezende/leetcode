function ListNode(val) {
  this.val = val
  this.next = null
}

function addTwoNumbers(l1, l2) {
  let head = new ListNode(0)
  let node = head
  let carry = 0

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = Math.floor(sum / 10)
    node.next = new ListNode(sum % 10)
    node = node.next
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }

  return head.next
}
