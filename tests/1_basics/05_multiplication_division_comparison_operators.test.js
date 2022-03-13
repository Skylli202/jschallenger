'use strict'

const myFunction = require('../../src/1_basics/05_multiplication_division_comparison_operators')

const jschallengeTestCases = [
  { input: [10, 100], resultExpected: 0.1 },
  { input: [90, 45], resultExpected: 4050 },
  { input: [8, 20], resultExpected: 0.4 },
  { input: [2, 0.5], resultExpected: 1 }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input[0], data.input[1])).toBe(data.resultExpected)
  })
})
