import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_POST,
  VOTE_POST,
  GET_POSTS_BY_CATEGORIES,
} from '../actions/post';

const initialPostsState = [];

export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORIES:
      return action.posts;
    case REQUEST_POSTS:
      return action.posts;
    case RECEIVE_POSTS:
      return action.posts;
    case ADD_POST:
      return [...state, action.post];
    case RECEIVE_POST:
      return [action.post];
    case VOTE_POST:
      // return [...state, ...action.post];
      return {
        ...state,
        posts: state.posts
          .filter(post => {
            return post.id === action.post.id;
          })
          .concat(action.post),
      };
    case EDIT_POST:
      return [...state, ...action.post];
    case DELETE_POST:
      return state.filter(post => post.id !== action.postId);
    default:
      return state;
  }
}
