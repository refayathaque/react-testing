import React from 'react';
import PropTypes from 'prop-types';

const JottoCongrats = ({ success }) => {
  const divStyle = {
    border: '1px solid red'
  };

  return (
    <div data-test='jotto-congrats-component' style={divStyle}>
      <p data-test='congrats-message'>{success? 'Congratulations! You guessed the word!' : ''}</p>
    </div>
  );
}

JottoCongrats.propTypes = {
  success: PropTypes.bool.isRequired
}

export default JottoCongrats;
