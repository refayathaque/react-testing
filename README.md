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
- Gives access to props and state, allowing manipulation of values and examining/testing for values

> `npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16`
- ^ adapter tells enzyme what kind of code to expect, in this case the adapter should tell enzyme to expect React 16 code
- Enzyme renders (`shallow`/`mount`) will return a `wrapper`, which we will then pass as an argument to the Jest `expect` *assertion* and then evaluate using a *matcher* (e.g., `toBeTruthy`)
  - e.g., `expect(wrapper).toBeTruthy()`

- When using Enzyme selectors use the *attribute syntax* as it is less susceptible to change by other devs, i.e., other devs will likely change the class, element or id
  - https://airbnb.io/enzyme/docs/api/selector.html#1-a-valid-css-selector
- Use the factory function `setup` to create a DRY-embodiment wrapper in test.js files, and this function can also be used to pass in `props` and/or `state`
- Use the 'findByTestAttr' function

### Types of Tests
- Unit: tests one piece of code (usually a function) and so is narrow and isolated in scope
- Integration: tests how multiple units work together

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
