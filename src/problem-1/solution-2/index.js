module.exports = (numbers, k) => {
  const remaining = new Set()

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i]

    if (remaining.has(n)) {
      return true
    }
  
    remaining.add(k - n)
  }

  return false
}