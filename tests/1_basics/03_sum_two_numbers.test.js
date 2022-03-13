'use strict'

const myFunction = require('../../src/1_basics/03_sum_two_numbers')

const jschallengeTestCases = [
  { input: [1, 2], resultExpected: 3 },
  { input: [1, 10], resultExpected: 11 },
  { input: [99, 1], resultExpected: 100 }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input[0], data.input[1])).toBe(data.resultExpected)
  })
})
