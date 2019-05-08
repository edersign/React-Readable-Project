import { combineReducers } from 'redux';
import posts from './post';
import categories from './categories';
import sorting from './sort';
import comments from './comments';
import loading from './fetching';

const rootReducer = combineReducers({
  posts,
  categories,
  sorting,
  comments,
  loading,
});

export default rootReducer;
