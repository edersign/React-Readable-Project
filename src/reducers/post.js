import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  GET_POSTS_BY_CATEGORIES,
} from '../actions/post';

const initialPostsState = [];

export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return action.posts;
    case GET_POSTS_BY_CATEGORIES:
      return { ...state, ...action.posts };
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return [action.post];
    case VOTE_POST:
      return state
        .filter(post => post.id !== action.post.id)
        .concat(action.post);
    case EDIT_POST:
      return state
        .filter(post => post.id !== action.post.id)
        .concat(action.post);
    case DELETE_POST:
      return state.filter(post => post.id !== action.postId);
    default:
      return state;
  }
}
