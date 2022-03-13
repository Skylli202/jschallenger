'use strict'

// https://www.jschallenger.com/javascript-arrays/count-number-negative-values-array

function myFunction (a) {
  let negValuesAmt = 0
  a.forEach(element => {
    if (element < 0) { negValuesAmt++ }
  })
  return negValuesAmt

  // author's solution
  // return a.filter((el) => el < 0).length
}

module.exports = myFunction
