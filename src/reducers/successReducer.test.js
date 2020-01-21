import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const newState = successReducer(undefined, {});
  // must have `undefined` if not state is being passed in
  expect(newState).toBe(false)
});

test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
  // must have `undefined` if not state is being passed in
  expect(newState).toBe(true)
});
