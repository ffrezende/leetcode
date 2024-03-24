/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rows = board.length
  let cols = board[0].length

  const backtrack = (row, col, path) => {
    if (path == word.length) {
      return true
    }

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] == '#' ||
      board[row][col] !== word[path]
    ) {
      return false
    }

    board[row][col] = '#'

    let found =
      backtrack(row + 1, col, path + 1) ||
      backtrack(row - 1, col, path + 1) ||
      backtrack(row, col + 1, path + 1) ||
      backtrack(row, col - 1, path + 1)

    board[row][col] = word[path]

    return found
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] == word[0] && backtrack(row, col, 1)) {
        return true
      }
    }
  }

  return false
}
