module.exports = (input) => {
  // 1. Move negatives and zeros to the left
  // 2. For each i >= x, where n = abs(input[i]), 0 < n < input.length, multiply if (input[n] > 0) input[n] * (-1)
  // 2.1 x is the index of the first input[x] > 0. Create a offset considering x, such that x will represent the index 1
  // 3. Iterate on the list and find the first i where input[i] > 0. Then the response will be (i - offset)

  let candidate = 1

  return candidate
}
