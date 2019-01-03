/**
 * Without division operation
 * */
module.exports = (numbers) => numbers
  .map((n, index) => numbers
    .filter((_, i) => index !== i)
    .reduce((previous, current) => previous * current, 1)
  )
