import React from 'react';
import JottoCongrats from './JottoCongrats';
import JottoGuessedWords from './JottoGuessedWords';

export default () => {
  return (
    <div data-test='jotto-component'>
      <h2>Jotto</h2>
      <JottoCongrats success={false} />
      <JottoGuessedWords guessedWords={[
        {guessedWord: 'train', letterMatchCount: 3}
      ]} />
    </div>
  )
}
