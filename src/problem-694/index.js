const assert = require('assert')

const firstMissingPositive = (array) => {
  matchNumbersAndIndexesInPlace(array)
  const firstMismatch = findFirstPositiveNumberAndIndexMismatch(array)

  return firstMismatch || array.length
}

const matchNumbersAndIndexesInPlace = (array) => {
  for (let i = 0; i < array.length; i++) {
    while (shouldSwap(i, array)) {
      swap(i, array[i], array)
    }
  }
}

const findFirstPositiveNumberAndIndexMismatch = (array) => {
  let result

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== i) {
      result = i
      break
    }
  }

  return result
}

const shouldSwap = (i, array) => isInbound(array[i], array.length) && array[i] !== i

const isInbound = (n, arrayLength) => 0 <= n && n < arrayLength

const swap = (i, j, array) => {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

//////////////////////////////////////////////////
const ARRAY = [20, -1, 3, 1, 2]
const result = firstMissingPositive(ARRAY)

assert.strictEqual(result, 4)
