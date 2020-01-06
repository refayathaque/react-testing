import React from 'react';
import { shallow } from 'enzyme';
import JottoCongrats from '../JottoCongrats';
import { findByTestAttr, checkProps } from '../../testUtils';

const defaultProps = { success: false };
// ^ done to have our tests (that do not care about props) pass when a component REQUIRES a prop
// e.g., `success: PropTypes.bool.isRequired` for JottoCongrats

/**
* Factory function to create a ShallowWrapper for the ClickCounter component
* @function setup
* @param {object} props - Component props specific to this setup
* @returns {ShallowWrapper} - From enzyme (look above in import statement)
*/
const setup = ( props = {} ) => {
  const setupProps = { ...defaultProps, ...props };
  // ^ if the props we pass in during tests override the defaultProps declared above, our props will be assigned
  // "Merge object properties with the spread operator"
  // https://davidwalsh.name/merge-objects
  // "In the case of a key collision, the right-most (last) object's value wins out"
  return shallow(<JottoCongrats {...setupProps} />)
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
  // ^ `toBeFalsy()` is redundant with `toBe('')`, but is here to show that both can work when testing for no text
})

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true })
  const message = findByTestAttr(wrapper, 'congrats-message')
  expect(message.text()).toBeTruthy()
  expect(message.text().length).not.toBe(0)
})

test('does not throw warning with expected props', () => {
  const expectedProps = { success: true };
  checkProps(JottoCongrats, expectedProps);
  // test will pass because we are checking for a negative (i.e., undefined value), we are asking `checkPropTypes` if there is anything wrong with the `expectedProps` we are providing
  // an error will be thrown if the `expectedProps` does not match the `component.propType`, or if the `component.propType` does not match the `conformingProps`
  // Good way of catching issues that could arise from others in your team changing the props and their types in the component
})
