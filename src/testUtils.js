import checkPropTypes from 'check-prop-types'

/**
* Return ShallowWrapper containing node(s) with the given data-test value
* @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
* @param {string} val - Value of data-test attribute for search
* @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    // ^ props we expect to pass
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}
// test should pass because we are checking for a negative, we are asking `checkPropTypes` if there is anything wrong with the `expectedProps` we are providing
// but an error will be thrown if the `conformingProps` does not conform to the `component.propType`, or if the `component.propType` does not match the `conformingProps`
// Good way of catching issues that could arise from others in your team changing the props and their types in the component
