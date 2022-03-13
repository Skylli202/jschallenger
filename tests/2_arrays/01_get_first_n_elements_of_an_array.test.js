'use strict'

const myFunction = require('../../src/2_arrays/01_get_first_n_elements_of_an_array')

const jschallengeTestCases = [
  { input: [1, 2, 3, 4], resultExpected: [1, 2, 3] },
  { input: [5, 4, 3, 2, 1, 0], resultExpected: [5, 4, 3] },
  { input: [99, 1, 1], resultExpected: [99, 1, 1] }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toStrictEqual(data.resultExpected)
  })
})
