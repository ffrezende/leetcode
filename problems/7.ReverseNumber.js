var reverse = function (x) {
  let result = 0
  const isNevative = x < 0

  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)

  x = Math.abs(x)

  while (x > 0) {
    const digit = x % 10
    result = result * 10 + digit
    x = Math.floor(x / 10)

    if (result > max || result < min) {
      return 0
    }
  }

  return isNevative ? -result : result
}
