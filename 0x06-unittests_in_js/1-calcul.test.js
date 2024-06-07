#!/usr/bin/node
const assert = require('assert')
const calculateNumber = require('./0-calcul.js')

describe('calculateNumber', () => {
  it('should return number', () => {
    const result = calculateNumber(3.6, 2)
    assert.equal(typeof result, 'number')
  })
  it('should retuen null if not type SUM or SUBTRACT or DIVIDE', () => {
    const result = calculateNumber('alx', 1, 1.6)
    assert.equal(result, null)
  })
  it('SUM', () => {
    const result = calculateNumber('SUM', -1, 0.9)
    assert.equal(result, 0)
  })
  it('SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 9.1, 2)
    assert.equal(result, 7)
  })
  it(' DIVIDE ', () => {
    const result = calculateNumber('DIVIDE', 5.7, 2)
    assert.equal(result, 3)
  })
  it(' DIVIDE null if b is 0', () => {
    const result = calculateNumber('DIVIDE', 5.7, 0)
    assert.equal(result, null)
  })
  it('should not accept string a', () => {
    const result = calculateNumber('SUM', 1, 'alx')
    assert.equal(result, null)
  })
  it('should not accept string b', () => {
    const result = calculateNumber('SUM', 'alx', 2)
    assert.equal(result, null)
  })
})
