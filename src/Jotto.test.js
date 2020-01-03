import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Jotto from './Jotto';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})

test('Jotto renders without crashing and specifically renders itself and not another component', () => {
  const wrapper = shallow(<Jotto />)
  expect(wrapper).toBeTruthy();
  const jottoComponent = wrapper.find("[data-test='jotto-component']")
  expect(jottoComponent.length).toBe(1);
});
