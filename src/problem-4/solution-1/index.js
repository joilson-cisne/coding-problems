const solve = (input) => {
  input = movePositivesToTheRight(input)

  let offset
  
  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    
    if (element > 0) {
      offset = i - 1
      break
    } // So the first positive number has virtual index === 1
  }

  for (let i = offset + 1; i < input.length; i++) {
    const n = Math.abs(input[i])

    if (n + offset >= input.length) { continue }

    if (input[n + offset] > 0) {
      input[n + offset] = input[n + offset] * (-1)
    }
  }
  
  for (let i = offset + 1; i < input.length; i++) {
    const element = input[i];
    
    if (element > 0) {
      return i - offset
    }
  }

  return input.length - offset + 1
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
