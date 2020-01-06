import React from 'react';
import { shallow } from 'enzyme';
import ClickCounter from '../ClickCounter';
import { findByTestAttr } from '../testUtils';

/**
* Factory function to create a ShallowWrapper for the ClickCounter component
* @function setup
* @returns {ShallowWrapper} - From enzyme (look above in import statement)
*/
const setup = () => {
  return shallow(<ClickCounter />)
}

test('ClickCounter renders without crashing and specifically renders itself and not another component', () => {
  const wrapper = shallow(<ClickCounter />)
  // ^ refactored to use `setup` function in tests below...
  // console.log(wrapper.debug()); logs what is in the DOM, useful for debugging
  // expect(wrapper).toBeFalsy(); will cause test to fail bc we are rendering SOMETHING in the DOM
  expect(wrapper).toBeTruthy();
  // https://jestjs.io/docs/en/expect#tobetruthy
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

test('counter starts at 0, i.e., ClickCounter renders with initial `counter` state of 0', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(0)
  // ^ https://codesandbox.io/s/1r2zq0560j?from-embed
  // ^ https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/
  // Since Enzyme does not (yet) support Hooks, we could not use the [`state`](https://airbnb.io/enzyme/docs/api/ReactWrapper/state.html) function to check the component's local state, this function would only work if we had a class-based component
})

test('clicking increment button increments counter display', () => {
  const wrapper = setup()
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  incrementButton.simulate('click')
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(1)
  // "If I'm testing my onClick event, all I really care about for my test is that is calls setCount with whatever variable it should. We trust that React works correctly; so, my test shouldn't rely on useState updating my state variable and re-rendering my component for my unit test." (https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga)
  // Since Enzyme does not (yet) support Hooks, we could not use the [`setState`](https://airbnb.io/enzyme/docs/api/ShallowWrapper/setState.html) function to set the local state, this function would only work if we had a class-based component
})

test('clicking decrement button when `counter` state is 0 issues a warning, and clicking increment button when `counter` state is 0 removes the warning', () => {
  const wrapper = setup()
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  decrementButton.simulate('click')
  const warningDisplay = findByTestAttr(wrapper, 'warning-display');
  expect(warningDisplay.text()).toBeTruthy();
  // https://jestjs.io/docs/en/expect#tobetruthy

  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  incrementButton.simulate('click')
  const updatedWarningDisplay = findByTestAttr(wrapper, 'warning-display');
  expect(updatedWarningDisplay.text()).toBeFalsy();
})
