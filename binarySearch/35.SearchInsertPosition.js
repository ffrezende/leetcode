// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let lastPosition = 0

  while (left <= right) {
    let mid = Math.floor((right + left) / 2)

    if (nums[mid] == target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
      lastPosition = left
    } else {
      right = mid - 1
      lastPosition = mid
    }
  }

  return lastPosition
}

console.log(search([1, 3], 2))
