import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import JottoCongrats from './JottoCongrats';
import { findByTestAttr } from './testUtils';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

/**
* Factory function to create a ShallowWrapper for the ClickCounter component
* @function setup
* @param {object} props - Component props specific to this setup
* @returns {ShallowWrapper} - From enzyme (look above in import statement)
*/
const setup = (props={}) => {
  return shallow(<JottoCongrats {...props} />)
}

test('JottoCongrats renders without crashing and specifically renders itself and not another component', () => {
  const wrapper = setup()
  expect(wrapper).toBeTruthy();
  const jottoComponent = findByTestAttr(wrapper, 'jotto-congrats-component')
  expect(jottoComponent.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const jottoComponent = findByTestAttr(wrapper, 'jotto-congrats-component')
  expect(jottoComponent.text()).toBe('')
  expect(jottoComponent.text()).toBeFalsy()
})

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text()).toBeTruthy()
  expect(message.text().length).not.toBe(0)
})
