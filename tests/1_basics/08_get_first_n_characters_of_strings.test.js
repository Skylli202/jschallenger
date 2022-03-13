'use strict'

const myFunction = require('../../src/1_basics/08_get_first_n_characters_of_strings')

const jschallengeTestCases = [
  { input: 'abcdefg', resultExpected: 'abc' },
  { input: '1234', resultExpected: '123' },
  { input: 'fgedcba', resultExpected: 'fge' }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toBe(data.resultExpected)
  })
})
