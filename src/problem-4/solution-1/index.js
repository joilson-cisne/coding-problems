module.exports = (input) => {
  input.sort() // TODO: Use radix sort to get O(n) complexity

  let candidate = 1
  
  for (let i = 0; i < input.length; i++) {
    let current = input[i];

    if (current <= 0) {
      continue
    }

    if (candidate === current) {
      ++candidate
      continue
    }

    if (current > candidate + 1) {
      break
    }
  }

  return candidate
}
