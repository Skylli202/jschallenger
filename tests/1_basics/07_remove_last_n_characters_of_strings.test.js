'use strict'

const myFunction = require('../../src/1_basics/07_remove_last_n_characters_of_strings')

const jschallengeTestCases = [
  { input: 'abcdefg', resultExpected: 'abcd' },
  { input: '1234', resultExpected: '1' },
  { input: 'fgedcba', resultExpected: 'fged' }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toBe(data.resultExpected)
  })
})
