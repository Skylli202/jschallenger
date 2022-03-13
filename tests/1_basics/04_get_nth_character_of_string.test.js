'use strict'

const myFunction = require('../../src/1_basics/04_get_nth_character_of_string')

const jschallengeTestCases = [
  { input: ['abcd', 1], resultExpected: 'a' },
  { input: ['zyxbwpl', 5], resultExpected: 'w' },
  { input: ['gfedcba', 3], resultExpected: 'e' }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input[0], data.input[1])).toBe(data.resultExpected)
  })
})
