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
