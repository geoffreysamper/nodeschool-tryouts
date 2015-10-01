function countWords(inputWords, fn, init) {
     return (function reduceOne(index, value) {
    if (index > inputWords.length - 1) return value // end condition
    return reduceOne(index + 1, fn(value, inputWords[index], index, inputWords)) // calculate & pass values to next step
  })(0, init) // IIFE. kick off recursion with initial values
}

module.exports = countWords