import React, { useState } from 'react';

export default () => {
  return (
    <div data-test='click-counter-component'>
      <h2 data-test='counter-display'>Counter isplay</h2>
      <button data-test='increment-button'>Increment counter</button>
    </div>
  )
}
