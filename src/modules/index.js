import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import posts from './posts';

export default combineReducers({
  router: routerReducer,
  counter,
  posts
});
