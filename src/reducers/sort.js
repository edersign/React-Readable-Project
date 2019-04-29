import {
  SELECT_SORT,
} from '../actions/sort';

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
