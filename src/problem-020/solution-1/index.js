const solve = (list1, list2) => {
  // O(m + n)
  const m = getSize(list1)
  const n = getSize(list2)
  
  const delta = m - n

  // Iterate delta steps over the biggest array
  let [node1, node2] = delta > 0 ? [list1, list2] : [list2, list1]

  for (let count = 0; count < Math.abs(delta); count++) {
    node1 = node1.next
  }

  // Iterate over both lists until the they reach the same node
  while (node1.val !== node2.val) {
    node1 = node1.next
    node2 = node2.next
  }

  return node1.val
}

const getSize = (list) => {
  if (!list) {
    return 0
  }
  
  let node = list
  let size = 1

  while (node.next) {
    size++
    node = node.next
  }

  return size
}

module.exports = {
  solve
}
