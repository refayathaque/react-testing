import React from 'react';

export default ({ success }) => {
  return (
    <div data-test='jotto-congrats-component'>
      <p data-test='congrats-message'>{success? 'Congratulations! You guessed the word!' : ''}</p>
    </div>
  );
}
