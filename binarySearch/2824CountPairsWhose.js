//Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

//brute force
var countPairsBrute = function (nums, target) {
  let count = 0
  const n = nums.length

  for (let i = 0; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (nums[i] + nums[j] < target) count += 1
    }
  }

  return count
}

var countPairs = function (nums, target) {
  let count = 0
  const sorted = nums.sort((a, b) => a - b)

  let left = 0
  let right = sorted.length - 1

  while (left < right) {
    if (sorted[left] + sorted[right] < target) {
      count = right - left
      left += 1
    } else {
      right -= 1
    }
  }

  return count
}

console.log(countPairs([-1, 1, 2, 3, 1], 2))
