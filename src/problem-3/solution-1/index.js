const SEPARATOR = '..'
const EMPTY_NODE = '#'

const serialize = (root) => {
  if (!root || !root.val) { return EMPTY_NODE }

  return `${root.val}${SEPARATOR}${serialize(root.left)}${SEPARATOR}${serialize(root.right)}`
}

const deserialize = (str) => {
  if (!str) { return null }

  let data = str.split(SEPARATOR)

  const deserializer = () => {
    let value = data.shift()

    if (value === EMPTY_NODE) {
      return null
    }
     
    var node = Node(
      value,
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
