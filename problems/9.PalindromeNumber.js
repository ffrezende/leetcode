/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false
  }

  let reverdedValue = x

  return x == parseInt(reverdedValue.toString().split('').reverse().join(''))
}
