/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const guess = (num) => 2

var guessNumber = function (n) {
  if (n == 1) return 1

  let left = 0
  let right = n

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    let possibleValue = guess(mid)

    if (possibleValue == 0) {
      return mid
    } else if (possibleValue == 1) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}

console.log(guessNumber(5))
