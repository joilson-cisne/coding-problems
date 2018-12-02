const serialize = (root) => {
  if (!root || isEmpty(root)) { return '()' }

  return `(${root.val}${serialize(root.left)}${serialize(root.right)})`
}

const deserialize = (str) => {
  if (!str || str === "()") { return {} }

  const regex = /\((.*)\((.*)\)\((.*)\)\)/
  const res = regex.exec(str)

  const val = res[1]
  const left = deserialize(res[2])
  const right = deserialize(res[3])

  return { val, left, right }
}

function isEmpty(obj) {
  for(var key in obj) {
    if(obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

module.exports = {
  serialize,
  deserialize,
}
