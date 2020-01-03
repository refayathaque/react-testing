import React, { useState } from 'react';

export default () => {
  const [counter, setCounter] = useState(0);
  const [displayWarning, setDisplayWarning] = useState(false);

  const controlDecrement = () => {
    if (counter === 0) {
      setDisplayWarning(true)
    } else {
      setCounter(counter - 1)
    }
  }

  const controlIncrement = () => {
    if (counter === 0 && displayWarning === true) {
      setDisplayWarning(false)
      setCounter(counter + 1)
    } else {
      setCounter(counter + 1)
    }
  }

  return (
    <div data-test='click-counter-component'>
      <h2 data-test='counter-display'>Counter: {counter}</h2>
      <button data-test='increment-button' onClick={() => controlIncrement()}>Increment counter</button>
      <button data-test='decrement-button' onClick={() => controlDecrement()}>Decrement counter</button>
      <p data-test='warning-display'>{displayWarning ? 'You cannot go below zero' : ''}</p>
    </div>
  )
}
