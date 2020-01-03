import React from 'react';
import PropTypes from 'prop-types';

const JottoGuessedWords = ({ guessedWords }) => {
  let content
  if (guessedWords.length === 0) {
    content = <span data-test='guess-instructions'>Try to guess the secret words!</span>
  } else {
    const guessWordsRows = guessedWords.map((word, index) => (
      <tr data-test='guessed-word' key={index }>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))

    content = (
      <div data-test="guessed-words">
        <h3>Guessed words</h3>
        <table>
          <thead>
            <tr><th>Guess</th><th>matching letters</th></tr>
          </thead>
          <tbody>
            { guessWordsRows }
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test='jotto-guessed-words-component'>
      {content}
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
