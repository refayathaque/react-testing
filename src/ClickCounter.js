import React, { useState } from 'react';

export default () => {
  const [counter, setCounter] = useState(0);

  return (
    <div data-test='click-counter-component'>
      <h2 data-test='counter-display'>Counter: {counter}</h2>
      <button data-test='increment-button' onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </div>
  )
}
