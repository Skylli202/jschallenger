'use strict'

const myFunction = require('../../src/3_objects/01_accessing_object_properties_three')

const jschallengeTestCases = [
  { input: [{ continent: 'Asia', country: 'Japan' }, 'continent'], resultExpected: 'Asia' },
  { input: [{ country: 'Sweden', continent: 'Europe' }, 'country'], resultExpected: 'Sweden' }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input[0], data.input[1])).toBe(data.resultExpected)
  })
})
