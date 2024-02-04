//[2,7,11,15]

const twoSum = (array, target) => {
  const obj = new Map()

  for (let i = 0; i <= array.length; i++) {
    const rest = target - array[i]

    if (obj.has(rest)) {
      return [obj.get(rest), i]
    }

    obj.set(rest, i)
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
