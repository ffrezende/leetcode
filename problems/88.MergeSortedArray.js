/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//Version 1
const merge = (nums1, m, nums2, n) => {
  const sorted = []
  let interator = 0

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] != 0) {
      if (nums1[i] > nums2[interator]) {
        sorted.push(nums2[interator])
        interator = interator + 1
      } else if (nums1[i] == nums2[interator]) {
        sorted.push(nums1[i])
        sorted.push(nums2[interator])
        interator = interator + 1
      } else {
        sorted.push(nums1[i])
      }
    } else if (interator <= nums1.length) {
      const element = nums2[interator]
      if (element) {
        sorted.push(nums2[interator])
        interator = interator + 1
      }
    }
  }

  return sorted
}

const merge3 = (array1, n, array2, m) => {
  let sizeArray1 = n - 1
  let sizeArray2 = m - 1
  let totalSize = n + m - 1

  while (sizeArray1 >= 0 && sizeArray2 >= 0) {
    if (array1[sizeArray1] > array2[sizeArray2]) {
      array1[totalSize--] = array1[sizeArray1]
    } else {
      array1[totalSize--] = array2[sizeArray1]
    }
  }

  while (sizeArray2 >= 0) {
    array1[totalSize--] = array2[sizeArray1]
  }
}

//Version 2
const merge2 = (nums1, m, nums2, n) => {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
}

console.log(merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
