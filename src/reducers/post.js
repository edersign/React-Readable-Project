import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  GET_POSTS_BY_CATEGORIES,
  INVALIDATE_POSTS,
  ADD_POST,
} from '../actions/ActionTypes';

const initialPostsState = [];

export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case INVALIDATE_POSTS:
      return action.err;
    case VOTE_POST:
      return state
        .filter(post => post.id !== action.post.id)
        .concat(action.post);
    case ADD_POST:
      return state
        .filter(post => post.id !== action.post.id)
        .concat(action.post);
    case EDIT_POST:
      return state
        .filter(post => post.id !== action.post.id)
        .concat(action.post);
    case DELETE_POST:
      return state.filter(post => post.id !== action.postId);
    case GET_POSTS_BY_CATEGORIES:
      return action.posts;
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return [action.post];
    default:
      return state;
  }
}
