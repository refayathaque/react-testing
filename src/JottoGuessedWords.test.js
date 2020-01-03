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
  const jottoGuessedWordsComponent = findByTestAttr(wrapper, 'jotto-guessed-words-component')
  expect(jottoGuessedWordsComponent.length).toBe(1);
});

test('does not throw warning with expected props', () => {
  checkProps(JottoGuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper
  // ^ initialized here so that all tests can access the wrapper, which will be initialized and assigned the within the scope of the `beforeEach` function below

  beforeEach(() => {
     wrapper = setup({ guessedWords: [] })
  })
  // ^ runs and assigns value to `wrapper` before each test

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'jotto-guessed-words-component')
    expect(component.length).toBe(1);
  })
  // ^ same as first test in this file

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
    { guessedWord: 'adopt', letterMatchCount: 2 }
  ];

  let wrapper

  beforeEach(() => {
     wrapper = setup({ guessedWords })
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'jotto-guessed-words-component')
    expect(component.length).toBe(1);
  })

  test('renders "guessed words" section', () => {
    const guessedWordsSectionNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordsSectionNode.length).toBe(1);
  })

  test('displays correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordNodes.length).toBe(guessedWords.length);
  })
})
