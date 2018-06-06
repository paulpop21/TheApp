import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import user from './user';
import car from './car';

export default combineReducers({
  form,
  user,
  car,
});
