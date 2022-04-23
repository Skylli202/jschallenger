'use strict'

const myFunction = require('../../src/3_objects/01_accessing_object_properties_three')

const jschallengeTestCases = [
  { input: { one: 1, 'prop-2': 2 }, resultExpected: 2 },
  { input: { 'prop-2': 'two', prop: 'test' }, resultExpected: 'two' }
]

describe.each(jschallengeTestCases)('', (data) => {
  it(`${data.input} should return ${data.resultExpected}`, function () {
    expect(myFunction(data.input)).toBe(data.resultExpected)
  })
})
