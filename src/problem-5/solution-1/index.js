const cons = (a, b) => {
  const pair = (f) => f(a, b)

  return pair
}

const car = (pair) => {
  return pair(first)
}

const cdr = (pair) => {
  return pair(second)
}

const first = (a, b) => a
const second = (a, b) => b

module.exports = {
  cons,
  car,
  cdr
}
