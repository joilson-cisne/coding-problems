module.exports = (numbers, k) => {
  let result = false

  numbers.forEach((first, firstIndex) => {
    numbers.forEach((second, secondIndex) => {
      if (
        (firstIndex !== secondIndex)
        && (first + second === k)
      ) {
        result = true
      }
    })
  })

  return result
}