import { RECEIVE_CATEGORIES, INVALIDATE_CATEGORIES } from '../actions/ActionTypes';

export default function categories(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    case INVALIDATE_CATEGORIES:
      return action.error;
    default:
      return state;
  }
}
