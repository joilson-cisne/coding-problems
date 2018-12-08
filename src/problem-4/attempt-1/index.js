module.exports = (input) => {
  for (let i = 1;; i++) {
    if (!input.includes(i)) {
      return i
    }
  }
}
