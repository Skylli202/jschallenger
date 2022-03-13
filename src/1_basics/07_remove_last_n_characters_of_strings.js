'use strict'

// https://www.jschallenger.com/javascript-basics/remove-last-characters-string-javascript

function myFunction (a) {
  return a.slice(0, a.length - 3)
  // author's solution :
  // return a.slice(0, -3)
}

module.exports = myFunction
