/**
 * Without division operation. Dynamic Programming
 * */
module.exports = (numbers) => {
  const n = numbers.length

  const left = []
  const right = []
  const product = []

  left[0] = 1
  right[n-1] = 1

  // left side
  for (let i = 1; i < n; i++) {
    left[i] = numbers[i-1] * left[i-1]
  }

  // right side
  for (let i = n-2; i >= 0; i--) {
    right[i] = numbers[i+1] * right[i+1]
  }

  // product
  for (let i = 0; i < n; i++) {
    product.push(left[i] * right[i])
  }

  return product
}