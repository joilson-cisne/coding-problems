const SEPARATOR = '..'
const EMPTY_NODE = '#'

const serialize = (root) => {
  if (!root || !root.val) { return EMPTY_NODE }

  return `${root.val}${SEPARATOR}${serialize(root.left)}${SEPARATOR}${serialize(root.right)}`
}

let data

const deserialize = (str) => {
  if (!str) { return null }

  data = str.split(SEPARATOR)

  const deserializer = () => {
    if (data.length === 0 || data[0] === EMPTY_NODE) {
      data.shift()
      return null
    }
     
    var node = Node(
      data.shift(),
      deserializer(),
      deserializer()
    )

    return node
  }
  
  return deserializer()
}

const Node = (val, left = null, right = null) => ({ val, left, right })

module.exports = {
  serialize,
  deserialize,
  Node
}
