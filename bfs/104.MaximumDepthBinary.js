var maxDepth = function (root) {
  if (!root) return 0

  const queue = [root]
  const result = 0

  //BFS
  while (queue.length > 0) {
    const levelSize = queue.length

    for (let index = 0; index < levelSize; index++) {
      const node = queue.shift()

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result++
  }
}
