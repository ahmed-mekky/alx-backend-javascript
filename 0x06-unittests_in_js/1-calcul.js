#!/usr/bin/node
function calculateNumber(type, a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    return null
  }
  if (type == 'SUM') {
    return Math.round(a) + Math.round(b)
  }
  else if (type == 'SUBTRACT') {
    return Math.round(a) - Math.round(b)
  }
  else if (type == 'DIVIDE') {
    return Math.round(a) / Math.round(b)
  }
  else {
    return null
  }
}

module.exports = calculateNumber
