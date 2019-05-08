import { LOAD_POSTS, LOAD_CATEGORIES, LOAD_COMMENTS } from './ActionTypes';

const setAPIFetching = apiFetching => ({
  type: LOAD_POSTS,
  apiFetching,
});

export default setAPIFetching;
