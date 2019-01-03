const solve = (input) => {
  input = movePositivesToTheRight(input)
  const firstPositiveIndex = getFirstPositiveIndex(input)
  
  if (firstPositiveIndex === undefined) {
    return 1
  }

  const offset = firstPositiveIndex - 1 // So that the first positive number has virtualIndex === 1
  markVisitedIndexes(input, offset)
  const index = getFirstNotVisitedIndex(input)
  const virtualIndex = index - offset

  return virtualIndex
}

const getFirstPositiveIndex = (input) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      return i
    }
  }
}

const getFirstNotVisitedIndex = (input) => {
  let index

  for (index = 0; index < input.length; index++) {
    if (input[index] > 0) {
      return index
    }
  }

  return index
}

const markVisitedIndexes = (input, offset) => {
  for (let i = offset + 1; i < input.length; i++) {
    const n = Math.abs(input[i])

    if (n + offset >= input.length) { continue }

    if (input[n + offset] > 0) {
      input[n + offset] = input[n + offset] * (-1)
    }
  }
}

const movePositivesToTheRight = (array) => {
  let i = 0
  let j = array.length - 1

  while(i < j) {
    if (array[i] > 0 && array[j] <= 0) {
      swap(array, i, j)
      ++i
      --j
    }
    
    if (array[i] <= 0) {
      ++i
    }

    if (array[j] > 0) {
      --j
    }
  }
  
  return array
}

const swap = (array, i, j) => {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp

  return array
}

module.exports = {
  solve,
  swap,
  movePositivesToTheRight
}
