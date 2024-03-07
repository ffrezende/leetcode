class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert = (value) => {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let currentNode = this.root

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = newNode
          return
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  generateTreeStructure = (node, level, display) => {
    if (node === null) return

    if (!display[level]) display[level] = []
    display[level].push(node.value)

    this.generateTreeStructure(node.left, level + 1, display)
    this.generateTreeStructure(node.right, level + 1, display)
  }

  printTree2D = () => {
    if (!this.root) return

    let display = []
    this.generateTreeStructure(this.root, 0, display)

    for (let level = 0; level < display.length; level++) {
      let levelStr = ''
      for (let i = 0; i < display[level].length; i++) {
        levelStr += display[level][i] + ' '
      }
      console.log(levelStr)
    }
  }
}

const myTree = new BinarySearchTree()
myTree.insert(50)
myTree.insert(30)
myTree.insert(20)
myTree.insert(40)
myTree.insert(70)
myTree.insert(60)
myTree.insert(80)

myTree.printTree2D()
