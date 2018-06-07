import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import booking from './booking';
import car from './car';
import user from './user';

export default combineReducers({
  booking,
  car,
  form,
  user,
});
