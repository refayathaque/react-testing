# React Testing with Jest & Enzyme, with Redux, Hooks & Context
* January 2, 2020*

### Why is testing important?
- Better organization, more maintainable & fewer bugs

### TDD (Test-Driven Development)
- Write tests *before* writing code
  - "Red-Green Testing"
    - Tests will fail before code is written, forcing you to write code around making tests pass
- TDD is is more efficient, makes you write *better* code (bc you have to plan before you code), results in fewer bugs (caught sooner) and forces good code coverage

> If you get an error like [this](https://github.com/facebook/create-react-app/issues/346#issue-169180761) when trying to run tests with Jest (`npm test`) you will need to upgrade to the latest version of watchman, run `brew upgrade watchman`

> Jest is a JavaScript testing framework used to test JavaScript apps and Enzyme is a JavaScript testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output.
  - https://blog.logrocket.com/a-quick-guide-to-testing-react-hooks-fa584c415407/

### Jest
- Test runner that comes pre-packaged with `create-react-app`
- Has its [**own built in matchers for use with the `expect` assertion**](https://jestjs.io/docs/en/expect)

### Enzyme
- Creates the virtual DOM needed to test React without a browser, bc we need to see, e.g., how components render and respond to user input
- Searches through the DOM using jQuery like selectors (`$`)
- `shallow` rendering
  - Renders components only one level deep, e.g., will render the parent component but will use placeholders for children components
    - *As opposed to `mount` with renders the parent and all children components*
    - Leads to cleaner and quicker testing due to its 'isolated' nature, i.e., only testing *one* component at a time
  > Prefer shallow render over mounting the component as it helps testing a component as a unit rather than asserting the behavior of components inside a unit component. This is useful as we use an UI component library like React-Bootstrap in our source code. So we wouldn’t want to test the components from this library (as it’s already been done in the library itself).
    - https://medium.com/@acesmndr/testing-react-functional-components-with-hooks-using-enzyme-f732124d320a
- Gives access to props and state, allowing manipulation of values and examining/testing for values
> `npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16`
  - ^ adapter tells enzyme what kind of code to expect, in this case the adapter should tell enzyme to expect React 16 code
  - Adapter configuration will be in `setupTests.js`
- Enzyme renders (`shallow`/`mount`) will return a `wrapper`, which we will then pass as an argument to the Jest `expect` *assertion* and then evaluate using a *matcher* (e.g., `toBeTruthy`)
  - e.g., `expect(wrapper).toBeTruthy()`
- When using Enzyme selectors use the *attribute syntax* as it is less susceptible to change by other devs, i.e., other devs will likely change the class, element or id
  - https://airbnb.io/enzyme/docs/api/selector.html#1-a-valid-css-selector
- Use the factory function `setup` to create a DRY-embodiment wrapper in test.js files, and this function can also be used to pass in `props` and/or `state`
  - Use the 'findByTestAttr' function for DRY as well
  
### Enzyme Documentation
- **Uses matchers/assertions from *Chai* instead of Jest, since we are using Jest we have to find Jest equivaleent matchers**
- E.g., the documentation has `expect(...).to.equal(true)` and running this will return an `undefined` error in Jest, the equvalent matcher in Jest is `expect(...).toEqual(true)` so that should be used instead

### Checking Prop-Types
- Important, despite having coverage in ESLint, to solve issues that could arise from others in your team changing the props and their types in the component
  - Issues arising from ^ can be more easily caught if testing include Prop-Types
- `npm install --save-dev check-prop-types`
- When using this library it's important to remember the structure of the `props` `object` you are passing into the function `checkPropTypes`
  - Keyword here is `object`, React components take in an `object` that has `keys` corresponding to `prop` `values`, in the form of strings/arrays/objects/booleans/numbers/nested structures of </etc.
  - In your test file, before having implemented this library, you might be declaring and assigning your `defaultProps` variable to whatever you assume a specific `prop` `key` value should be, e.g., an array, object, string, etc.
    - And that **should** work as you will pass in that value in your tests as `<MyComponent propName={defaultProps}>`
    - But this will not work with the `checkPropTypes` function as it is looking for the `props` **`OBJECT`** with `keys` corresponding to the `prop` values
    - `const defaultProps = { products:
  [
    { id: 0, name: 'Andrew', location: 'Dhaka' },
    { id: 2, name: 'Tom', location: 'Chittagong' },
    { id: 4, name: 'Brian', location: 'Sylhet' },
  ]
};`
    - NOT `const defaultProps = [
    { id: 0, name: 'Andrew', location: 'Dhaka' },
    { id: 2, name: 'Tom', location: 'Chittagong' },
    { id: 4, name: 'Brian', location: 'Sylhet' },
  ]`

### Types of Tests
- Unit: tests one piece of code (usually a function) and so is narrow and isolated in scope
- Integration: tests how multiple units work together
- Smoke
  > Minimal component tests verify that the component renders properly aka smoke testing or “Build Verification Testing”, [link](https://medium.com/selleo/testing-react-components-best-practices-2f77ac302d12)

## Paradigm

### 'Test Behavior, not Implementation'
- Ideally, we do not want to re-write tests after a refactor so keep this ethos in mind when writing tests
- Test **behavior** (what app should do) instead of implementation (how it works), this way, if the implementation changes, the tests will remain the same
- E.g., for app that keeps counter of button click count, `onClick` calls `incrementCounter` and the display increments by one
  - Behavior-driven test example:
    - Set initial state
    - Simulate button click
    - Check displayed count to see that the value was incremented by one from the initial state
  - Implementation-driven test example:
    - Set initial state
    - Simulate button click
    - Check to see if the specific functions (`onClick`/`incrementCounter`) were called
- Testing implementation is *brittle*, e.g., if we change the name a function, or something else about a function, the test(s) will fail

### Easy Diagnosis of Failing Tests
- E.g., Shopping cart for a custom t-shirt, and the user can select the style, size, color, number of shirts to order, type of text to put on shirt, etc., and then they add the t-shirt to the cart
  - Difficult-to-diagnose test example:
    - Test that the cart has the correct contents after the entire user selection process
      - This is difficult bc it is hard to determine which step in entire user selection process had a problem should the entire process fail, the test failure does not tell you exactly which part of your code is failing, it is inefficient to spend time and investigate and find out what caused the failure
  - Easy-to-diagnose test example:
    - After each user action, test expected *internal state* change or that a specific function is called
      - *But testing state or function is essentially testing **implementation***
        - Look below...

### Balance / Tradeoffs
- Granular (unit) tests lead to:
  - Easy-to-diagnose tests, *but* **brittle** tests
  - Implementation-driven tests
- Broader (integration) tests lead to:
  - Robust tests, *but* **difficult-to-diagnose** tests
  - Behavior-driven test
- **ART, NOT SCIENCE**
  - Sometimes you will optimize for easy-to-diagnose
  - Sometimes you will optimize for robustness
