import * as api from '../utils/api';

import {
  INVALIDATE_POSTS,
  LOAD_POSTS,
  RECEIVE_POSTS,
  RECEIVE_POST,
  EDIT_POST,
  DELETE_POST,
  VOTE_POST,
  ADD_POST,
  GET_POSTS_BY_CATEGORIES,
} from './ActionTypes';

export function requestPosts() {
  return {
    type: LOAD_POSTS,
  };
}
export const getAllPosts = posts => ({
  type: RECEIVE_POSTS,
  posts: posts,
});

export function invalidateposts() {
  return {
    type: INVALIDATE_POSTS,
  };
}

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts());
  api
    .getAllPosts()
    .then(posts => dispatch(getAllPosts(posts)))
    .catch(err => {
      console.error(err);
      dispatch(() => invalidateposts());
    });
};

export const getPost = post => ({
  type: RECEIVE_POST,
  post,
});

export const fetchPost = postId => dispatch => {
  dispatch(requestPosts());
  api
    .getPost(postId)
    .then(post => dispatch(getPost(post)))
    .catch(err => {
      console.error(err);
      dispatch(() => invalidateposts());
    });
};

export const postsByCategories = posts => ({
  type: GET_POSTS_BY_CATEGORIES,
  posts,
});

export const fetchPostsByCategories = category => dispatch => {
  dispatch(requestPosts());
  api
    .getPostsByCategories(category)
    .then(posts => dispatch(postsByCategories(posts)))
    .catch(err => {
      console.error(err);
      dispatch(() => invalidateposts(err));
    });
};

export const votePost = post => ({
  type: VOTE_POST,
  post,
});

export const fetchVotePost = (postId, option) => dispatch =>
  api.votePost(postId, option).then(post => dispatch(votePost(post)));

export const editPost = post => ({
  type: EDIT_POST,
  post,
});

export const fetchEditPost = (postId, post) => dispatch =>
  api.editPost(postId, post).then(post => dispatch(editPost(post)));

export const deletePost = postId => ({
  type: DELETE_POST,
  postId,
});

export const fetchDeletePost = postId => dispatch =>
  api.deletePost(postId).then(post => dispatch(deletePost(post)));

export const addPost = post => ({
  type: ADD_POST,
  post,
});

export const fetchAddPost = (post) => dispatch =>
  api.addPost(post).then(post => dispatch(addPost(post)));
