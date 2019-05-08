import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  GET_POSTS_BY_CATEGORIES,
  INVALIDATE_POSTS,
} from '../actions/post';

const initialPostsState = [];

export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case INVALIDATE_POSTS:
      return action.error;
    case REQUEST_POSTS:
      return { state, ...action.isFetchingPosts };
    case GET_POSTS_BY_CATEGORIES:
      return action.post;
    case RECEIVE_POSTS:
      // return action.posts;
      return {state, isFetchingPosts: false, ...action.posts};
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
