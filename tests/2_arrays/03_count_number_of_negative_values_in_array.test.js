'use strict'

const myFunction = require('../../src/2_arrays/03_count_number_of_negative_values_in_array')

const jschallengeTestCases = [
  { input: [1, -2, 2, -4], resultExpected: 2 },
  { input: [0, 9, 1], resultExpected: 0 },
  { input: [4, -3, 2, 1, 0], resultExpected: 1 }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toStrictEqual(data.resultExpected)
  })
})
