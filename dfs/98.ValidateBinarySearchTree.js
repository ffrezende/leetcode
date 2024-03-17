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
    if (!node) return null // Base case: Empty tree is valid

    // Check left subtree, but continue even if a violation is found there
    const leftViolation = dfs(node.left)
    if (leftViolation !== null && leftViolation >= node.val) return node.val

    // Check right subtree, but continue even if a violation is found there
    const rightViolation = dfs(node.right)
    if (rightViolation !== null && rightViolation <= node.val) return node.val

    // No violation found in current node or its subtrees
    return null
  }

  // Start traversal from the root node
  const violation = dfs(root)
  return violation === null // Return true if no violations found, false otherwise
}
