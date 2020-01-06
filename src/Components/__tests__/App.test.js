import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

test('Renders without crashing', () => {
  // basic form of a smoke test to ensure that SOMETHING renders
  const wrapper = shallow(<App />)
  // console.log(wrapper.debug()); logs what is in the DOM, useful for debugging
  // expect(wrapper).toBeFalsy(); will cause test to fail bc we are rendering SOMETHING in the DOM
  expect(wrapper).toBeTruthy();
});
