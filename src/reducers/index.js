import { combineReducers } from 'redux';
import posts from './post';
import categories from './categories';
import sorting from './sort';
import comments from './comments';
import loading from './fetching';

const rootReducer = combineReducers({
  categories,
  comments,
  posts,
  sorting,
  loading,
});

export default rootReducer;
