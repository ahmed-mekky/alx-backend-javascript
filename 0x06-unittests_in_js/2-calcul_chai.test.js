#!/usr/bin/node
const expect = require('chai').expect
const calculateNumber = require('./0-calcul.js')

describe('calculateNumber', () => {
  it('should return number', () => {
    const result = calculateNumber(3.6, 2)
    expect(result).to.be.a('number')
  })
  it('should retuen null if not type SUM or SUBTRACT or DIVIDE', () => {
    const result = calculateNumber('alx', 1, 1.6)
    expect(result).to.be(null)
  })
  it('SUM', () => {
    const result = calculateNumber('SUM', -1, 0.9)
    expect(result).to.be(0)
  })
  it('SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 9.1, 2)
    expect(result).to.be(7)
  })
  it(' DIVIDE ', () => {
    const result = calculateNumber('DIVIDE', 5.7, 2)
    expect(result).to.be(3)
  })
  it(' DIVIDE null if b is 0', () => {
    const result = calculateNumber('DIVIDE', 5.7, 0)
    expect(result).to.be(null)
  })
  it('should not accept string a', () => {
    const result = calculateNumber('SUM', 1, 'alx')
    expect(result).to.be(null)
  })
  it('should not accept string b', () => {
    const result = calculateNumber('SUM', 'alx', 2)
    expect(result).to.be(null)
  })
})
