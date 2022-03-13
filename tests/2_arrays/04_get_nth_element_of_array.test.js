'use strict'

const myFunction = require('../../src/2_arrays/04_get_nth_element_of_array')

const jschallengeTestCases = [
  { input: [[1, 2, 3, 4, 5], 3], resultExpected: 3 },
  { input: [[10, 9, 8, 7, 6], 5], resultExpected: 6 },
  { input: [[7, 2, 1, 6, 3], 1], resultExpected: 7 }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input[0], data.input[1])).toStrictEqual(data.resultExpected)
  })
})
