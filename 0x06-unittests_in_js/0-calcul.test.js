const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe('calcul', () => {
  it('should return 5', () => {
    const result = calculateNumber(3.4, 2)
    assert.equal(result, 5)
  })
  it('should return 6', () => {
    const result = calculateNumber(3, 3.1)
    assert.equal(result, 6)
  })
  it('should return 7', () => {
    const result = calculateNumber(3.6, 3)
    assert.equal(result, 7)
  })
  it('should return 8', () => {
    const result = calculateNumber(4, 3.9)
    assert.equal(result, 8)
  })
  it('should return number', () => {
    const result = calculateNumber(3.6, 2)
    assert.equal(typeof result, 'number')
  })
  it('should not accept string a', () => {
    const result = calculateNumber(1, 'alx')
    assert.equal(result, null)
  })
  it('should not accept string b', () => {
    const result = calculateNumber('alx', 2)
    assert.equal(result, null)
  })
  it('should return boolean a', () => {
    const result = calculateNumber(true, 2)
    assert.equal(result, null)
  })
  it('should return boolean b', () => {
    const result = calculateNumber(1, false)
    assert.equal(result, null)
  })
})
