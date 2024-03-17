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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return []

  let queue = [root]
  let result = []

  while (queue.length > 0) {
    let currentLevel = queue.length
    let currentlevelValues = []

    for (let i = 0; i < currentLevel; i++) {
      let currentNode = queue.shift()

      if (currentNode?.left) queue.push(currentNode.left)
      if (currentNode?.right) queue.push(currentNode.right)

      currentlevelValues.push(currentNode.val)
    }

    result.push(currentlevelValues)
  }

  return result.reverse()
}
