import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ClickCounter from './ClickCounter';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

/**
* Factory function to create a ShallowWrapper for the ClickCounter component
* @function setup
* @param {object} props - Component props specific to this setup
* @param {any} state - Initial state for setup
* @returns {ShallowWrapper} - From enzyme (look above in import statement)
*/
const setup = (props={}, state=null) => {
  return shallow(<ClickCounter {...props} />)
}

/**
* Return ShallowWrapper containing node(s) with the given data-test value
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
* @param {string} val - Value of data-test attribute for search
* @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('ClickCounter renders without crashing', () => {
  const wrapper = shallow(<ClickCounter />)
  // ^ refactored to use `setup` function in tests below...
  console.log(wrapper.debug()); // logs what is in the DOM
  // expect(wrapper).toBeFalsy(); will cause test to fail bc we are rendering SOMETHING in the DOM
  expect(wrapper).toBeTruthy();
  const clickCounterComponent = wrapper.find("[data-test='click-counter-component']")
  // ^ refactored to use `findByTestAttr` function in tests below...
  expect(clickCounterComponent.length).toBe(1);
  // ^ ensures we are rendering the CORRECT component
});

test('renders increment button', () => {
  const wrapper = setup()
  // const incrementButton = wrapper.find("[data-test='increment-button']")
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1);
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
})

test('counter starts at 0', () => {

})

test('clicking button increments counter display', () => {

})