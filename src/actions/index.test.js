import { correctGuess, actionTypes } from './';

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    // expect(action).toBe({});
    // ^ returns error
    // we cannot use the `toBe` matcher for any mutable data types like objects or arrays, we can only use the `toBe` matcher for immutable data types like numbers, strings and booleans
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
