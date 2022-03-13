'use strict'

const myFunction = require('../../src/1_basics/02_get_type_of_value')

const jschallengeTestCases = [
  { input: 1, resultExpected: 'number' },
  { input: false, resultExpected: 'boolean' },
  { input: {}, resultExpected: 'object' },
  { input: null, resultExpected: 'object' },
  { input: 'string', resultExpected: 'string' },
  { input: ['array'], resultExpected: 'object' }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toBe(data.resultExpected)
  })
})
