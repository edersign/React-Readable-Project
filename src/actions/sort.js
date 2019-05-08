import { SELECT_SORT } from './ActionTypes';

export const selectedSort = (sort) => ({
  type: SELECT_SORT,
  sort,
});
