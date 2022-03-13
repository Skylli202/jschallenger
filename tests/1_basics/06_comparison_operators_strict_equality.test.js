'use strict'

const myFunction = require('../../src/1_basics/06_comparison_operators_strict_equality')

const jschallengeTestCases = [
  { input: [2, 3], resultExpected: false },
  { input: [3, 3], resultExpected: true },
  { input: [1, '1'], resultExpected: false },
  { input: ['10', '10'], resultExpected: true }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input[0], data.input[1])).toBe(data.resultExpected)
  })
})
