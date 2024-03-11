var zigzagLevelOrder = function (root) {
  if (!root) return []

  const result = []
  const queue = [root]
  let level = 0

  while (queue.length > 0) {
    const levelSize = queue.length
    const currentLevel = []

    for (let index = 0; index < levelSize; index++) {
      const node = queue.shift()

      currentLevel.push(node?.val)

      if (node?.left) queue.push(node.left)
      if (node?.right) queue.push(node.right)
    }

    if (level % 2 !== 0) {
      result.push(currentLevel.reverse())
    } else {
      result.push(currentLevel)
    }

    level++
  }

  return result
}
