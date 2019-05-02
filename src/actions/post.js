import * as api from '../utils/api';

export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const EDIT_POST = 'EDIT_POSTS';
export const DELETE_POST = 'DELETE_POSTS';
export const VOTE_POST = 'VOTE_POSTS';
export const GET_POSTS_BY_CATEGORIES = 'GET_POSTS_BY_CATEGORIES';

export const postsByCategories = posts => ({
  type: GET_POSTS_BY_CATEGORIES,
  posts,
});

export const fetchPostsByCategories = category => dispatch =>
  api
    .getPostsByCategories(category)
    // .then(posts => console.log(posts))
    .then(posts => dispatch(postsByCategories(posts)));

export const requestAllPosts = posts => ({
  type: REQUEST_POSTS,
  posts,
});

export const getAllPosts = posts => ({
  type: RECEIVE_POSTS,
  success: true,
  posts: posts,
});

export const fetchPosts = () => dispatch =>
  api.getAllPosts().then(posts => dispatch(getAllPosts(posts)));

export const getPost = post => ({
  type: RECEIVE_POST,
  post,
});

export const fetchPost = postId => dispatch =>
  api.getPost(postId).then(post => dispatch(getPost(post)));

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
  api.deletePost(postId).then(() => dispatch(deletePost(postId)));
