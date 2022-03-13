'use strict'

const myFunction = require('../../src/1_basics/01_get_last_n_characters_of_string')

const jschallengeTestCases = [
  { input: 'abcdefg', resultExpected: 'efg' },
  { input: '1234', resultExpected: '234' },
  { input: 'fgedcba', resultExpected: 'cba' }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toBe(data.resultExpected)
  })
})
