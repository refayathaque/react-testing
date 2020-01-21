import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../testUtils';
import JottoInput from '../JottoInput';

const setup = ( initialState = {} ) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<JottoInput store={store} />)
  console.log(wrapper.debug())
}
// ^ bc we want to create a store for testing that matches the configuration of our actual store
// ^ addresses: Invariant Violation: Could not find "store" in the context of "Connect(JottoInput)"...

setup()

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {

    })

    test('renders input box', () => {

    })

    test('renders submit button', () => {

    })
  })

  describe('word has been guessed', () => {
    test('does not render component without error', () => {

    })

    test('does not render input box', () => {

    })

    test('does not render submit button', () => {

    })
  })
});

describe('update state', () => {

});
