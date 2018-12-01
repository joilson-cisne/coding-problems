module.exports = (numbers, k) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    const first = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const second = numbers[j];

      if (first + second === k) {
        return true
      }
    }
  }

  return false
}