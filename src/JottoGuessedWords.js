import React from 'react';
import PropTypes from 'prop-types';

const JottoGuessedWords = ({ guessedWord }) => {
  return (
    <div data-test='jotto-guessed-words-component'>
      
    </div>
  )
}

JottoGuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
  // An object taking on a particular shape
  // https://www.npmjs.com/package/prop-types#usage
}

export default JottoGuessedWords;
