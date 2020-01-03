import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps }  from './testUtils';
import JottoGuessedWords from './JottoGuessedWords';

const defaultProps = {
  guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<JottoGuessedWords {...setupProps} />)
}

test('JottoGuessedWords renders without crashing and specifically renders itself and not another component', () => {
  const wrapper = setup()
  expect(wrapper).toBeTruthy();
  const jottoGuessedWordsComponent = wrapper.find("[data-test='jotto-guessed-words-component']")
  expect(jottoGuessedWordsComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(JottoGuessedWords, defaultProps);
});
