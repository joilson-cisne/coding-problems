const solve = (input) => {
  moveLeft(input, 0, 'R')

  const start = input.lastIndexOf('R') + 1
  moveLeft(input, start, 'G')

  return input
}

const moveLeft = (input, start, letter) => {
  let left = start
  let right = input.length - 1

  while (left < right) {
    if (input[left] !== letter && input[right] === letter) {
      swapValue(left, right, input)
      left++
      right--
      continue
    }

    if (input[left] === letter) {
      left++
    }

    if (input[right] !== letter) {
      right--
    }
  }
}

const swapValue = (left, right, input) => {
  let temp = input[left]
  input[left] = input[right]
  input[right] = temp
}

module.exports = {
  solve
}
