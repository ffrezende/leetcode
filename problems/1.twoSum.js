//[2,7,11,15]

const twoSum = (array, target) => {
  const obj = new Map()

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]

    if (obj.has(complement)) {
      return [obj.get(complement), i]
    }

    obj.set(array[i], i)
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
