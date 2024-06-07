#!/usr/bin/node
const assert = require('assert')
const calculateNumber = require('./0-calcul.js')

describe('calcul', () => {
  it('should return -4 for -2.4, -2', () => {
    const result = calculateNumber(-2.4, -2)
    assert.equal(result, -4)
  })
  it('should return -3 for 0, -3.3', () => {
    const result = calculateNumber(0, -3.3)
    assert.equal(result, -3)
  })
  it('should return -2 for -1, -1', () => {
    const result = calculateNumber(-1, -1)
    assert.equal(result, -2)
  })
  it('should return -1 for -7, 6', () => {
    const result = calculateNumber(-7, 6)
    assert.equal(result, -1)
  })
  it('should return 0 for -1, 0.9', () => {
    const result = calculateNumber(-1, 0.9)
    assert.equal(result, 0)
  })
  it('should return 0 for 0, 0.1', () => {
    const result = calculateNumber(0, 0.1)
    assert.equal(result, 0)
  })
  it('should return 5 for 3.4, 2', () => {
    const result = calculateNumber(3.4, 2)
    assert.equal(result, 5)
  })
  it('should return 6 for 3, 3.1', () => {
    const result = calculateNumber(3, 3.1)
    assert.equal(result, 6)
  })
  it('should return 7 for 3.6, 3', () => {
    const result = calculateNumber(3.6, 3)
    assert.equal(result, 7)
  })
  it('should return 8 for 4, 3.9', () => {
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
