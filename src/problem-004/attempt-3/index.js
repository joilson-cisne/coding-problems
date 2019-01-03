module.exports = (input) => {
  input.sort() // PROBLEM: Not able to sort with space complexity = O(1) and time complexity = O(n)

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
