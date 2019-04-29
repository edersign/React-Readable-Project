import { combineReducers } from 'redux';
import posts from './post';
import categories from './categories';
import sorting from './sort';
import comments from './comments';

const rootReducer = combineReducers({
  posts,
  categories,
  sorting,
  comments,
});

export default rootReducer;
