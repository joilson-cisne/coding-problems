module.exports = (numbers) => {
  const total = numbers.reduce((acc, n) => acc * n, 1)

  return numbers.map(n => total / n)
}
