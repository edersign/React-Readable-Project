import {
  SELECT_SORT,
} from '../actions/ActionTypes';

const initialState = {
  sort: 'popular',
};

export default function sorting(state = initialState, action) {
  switch (action.type) {
    case SELECT_SORT:
      return {
        ...state,
        sort: action.sort,
      };
    default:
      return state;
  }
}
