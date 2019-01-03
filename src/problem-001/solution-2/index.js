module.exports = (numbers, k) => {
  const remaining = new Set()

  const result = numbers.some(n => {
    if (remaining.has(n)) {
      return true
    }
  
    remaining.add(k - n)
  })

  return result
}