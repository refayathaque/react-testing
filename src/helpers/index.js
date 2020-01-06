/**
* @function getLetterMatchCount
* @param {string} guessedWord
* @param {string} secretWord
* @returns {number}
*/

export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  // "Checking if an element is in Set has simpler syntax than Array by using Set.prototype.has(value) VS Array.prototype.indexOf(value)"
  // Set.prototype.has(value) returns a boolean (see below...) whereas Array.prototype.indexOf(value) returns -1 or 0
  // "Which means in Array, we need to ask an extra check if we want to make a condition where the element is in Array"
  // ^ https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a
  return [ ...secretLetterSet ].filter(letter => guessedLetterSet.has(letter)).length;
  // "Thanks to the spread operator, we can easily COPY OBJECTS BY VALUE instead of reference"
  // Never copy by reference... as mutating the 'copy' will also mutate the entity your copy references...
  // ^ to see this refer to example under "Copying Objects by value"
  // ^ https://medium.com/openmindonline/js-monday-02-the-formidable-spread-operator-f2d9177350ca

  // "The filter() method creates an array filled with all array elements that pass a test (provided as a function).", also does not mutate the caller
  // the return value is the number of eventualities where a letter in the secretLetterSet is also present in the guessedLetterSet
}
