
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return []
  }
  return matrix.map(element => {
    if (matrix.indexOf(element) % 2 !== 0) {
      element = element.reverse()
    }
    return element
  }).reduce((a, b) => a.concat(b))
}
