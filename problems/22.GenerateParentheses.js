/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let results = []

  const backtrack = (currentString, openN, closeN) => {
    if (openN == closeN && openN == 0) {
      results.push(currentString)
    }

    if (openN > 0) {
      backtrack(currentString + '(', openN - 1, closeN)
    }

    if (closeN > openN) {
      backtrack(currentString + ')', openN, closeN - 1)
    }
  }

  backtrack('', n, n)

  return results
}

class Person {
  constructor(name, id) {
    this.name
    this.id
  }

  getName = () => {
    return `${this.name} + ${this.id}`
  }
}

class House extends Person {
  constructor(name, id, house) {
    super(name, id)
    this.house = house
  }
}
