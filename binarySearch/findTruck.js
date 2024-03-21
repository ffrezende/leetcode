function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
}

function getTrucksForItems(trucks, items) {
  const sortedTrucks = trucks.slice().sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < items.length; i++) {
    const index = binarySearch(sortedTrucks, items[i])
    if (index === sortedTrucks.length) {
      result.push(-1)
    } else {
      result.push(trucks.indexOf(sortedTrucks[index]))
    }
  }

  return result
}

// Example usage:
const trucks = [10, 20, 30, 40]
const items = [15, 25, 35]
console.log(getTrucksForItems(trucks, items)) // Output: [ 1, 2, 3 ]
