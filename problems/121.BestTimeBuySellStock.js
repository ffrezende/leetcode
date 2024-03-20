const maxProfit = (stocks) => {
  let maxProfit = 0
  let minPrice = Infinity

  for (let price of stocks) {
    minPrice = Math.min(price, minPrice)
    maxProfit = Math.max(maxProfit, price - minPrice)
  }

  return maxProfit
}

const prices1 = [7, 1, 5, 3, 6, 4]
const prices2 = [7, 6, 4, 3, 1]

console.log(maxProfit(prices1)) // Output: 5
