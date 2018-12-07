const SEPARATOR = '..'
const EMPTY_NODE = '#'

const serialize = (root) => {
  if (!root || !root.val) { return EMPTY_NODE }

  return `${root.val}${SEPARATOR}${serialize(root.left)}${SEPARATOR}${serialize(root.right)}`
}

const deserialize = (str) => {
  data = str.split(SEPARATOR)
  
  let index = 0

  const deserializer = (data) => {
    console.log('index:', index)
    if (index > data.length || data[index] === EMPTY_NODE) {
      return null
    }
     
    var node = Node(
      data[index++], // TODO: index is not being uptaded :( clousure
      deserializer(data),
      deserializer(data)
    )

    return node
  }
  
  return deserializer(data)
}

const Node = (val, left = null, right = null) => ({ val, left, right })

module.exports = {
  serialize,
  deserialize,
  Node
}
