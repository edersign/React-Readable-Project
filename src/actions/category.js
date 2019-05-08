import * as api from '../utils/api';

import { LOAD_CATEGORIES, RECEIVE_CATEGORIES, INVALIDATE_CATEGORIES } from './ActionTypes';

export const requestCategories = () => ({
  type: LOAD_CATEGORIES,
});

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const invalidateCategories = error => ({
  type: INVALIDATE_CATEGORIES,
  error,
});

export const fetchCategories = () => dispatch => {
  dispatch(requestCategories());  
  api
    .getAllCategories()
    .then(categories => dispatch(receiveCategories(categories)))
    .catch(err => {
      console.error(err);
      dispatch(invalidateCategories(err));
    });
}
