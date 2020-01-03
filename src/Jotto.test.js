import React from 'react';
import { shallow } from 'enzyme';
import Jotto from './Jotto';

test('Jotto renders without crashing and specifically renders itself and not another component', () => {
  const wrapper = shallow(<Jotto />)
  expect(wrapper).toBeTruthy();
  const jottoComponent = wrapper.find("[data-test='jotto-component']")
  expect(jottoComponent.length).toBe(1);
});
