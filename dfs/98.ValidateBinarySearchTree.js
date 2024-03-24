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
 * @return {boolean}
 */

var isValidBST = function (root) {
  function dfs(node) {
    if (!node) return null

    const leftViolation = dfs(node.left)
    if (leftViolation !== null && leftViolation >= node.val) return node.val

    const rightViolation = dfs(node.right)
    if (rightViolation !== null && rightViolation <= node.val) return node.val

    return null
  }

  const violation = dfs(root)
  return violation === null
}
