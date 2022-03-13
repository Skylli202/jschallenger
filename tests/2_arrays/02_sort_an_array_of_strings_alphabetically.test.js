'use strict'

const myFunction = require('../../src/2_arrays/02_sort_an_array_of_strings_alphabetically')

const jschallengeTestCases = [
  { input: ['b', 'c', 'd', 'a'], resultExpected: ['a', 'b', 'c', 'd'] },
  { input: ['z', 'c', 'd', 'a', 'y', 'a', 'w'], resultExpected: ['a', 'a', 'c', 'd', 'w', 'y', 'z'] }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toStrictEqual(data.resultExpected)
  })
})
