// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.
// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  const frequenceHit = new Map()
  const queue = []

  for (let index = 0; index < nums.length; index++) {
    frequenceHit.set(nums[index], (frequenceHit.get(nums[index]) || 0) + 1)
  }

  frequenceHit.forEach((value, key) => {
    queue.push({ num: key, freq: value })
  })

  //BFS
  let maxFreq = 0
  let maxCountOfFreq = 0

  while (queue.length > 0) {
    const { num, freq } = queue.shift()

    if (freq > maxFreq) {
      maxFreq = freq
      maxCountOfFreq = 1
    } else if (freq == maxFreq) {
      maxCountOfFreq++
    }
  }

  return maxCountOfFreq * maxFreq
}

console.log(maxFrequencyElements([10, 12, 11, 9, 6, 19, 11]))
