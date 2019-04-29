import 'isomorphic-fetch';
import * as api from '../utils/api';

// export const INVALIDATE_COMMENTS = 'INVALIDATE_COMMENTS';
export const RECEIVE_COMMENTS = 'REQUEST_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const ADD_COMMENT = 'VOTE_COMMENT';

export const getAllComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const fetchComments = postId => dispatch =>
  api
    .getAllComments(postId)
    .then(comments => dispatch(getAllComments(comments)));

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment,
});

export const fetchAddComment = comment => dispatch =>
  api.addComment(comment).then(comment => dispatch(addComment(comment)));

export const getComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const fetchComment = commentId => dispatch =>
  api.getComment(commentId).then(comment => dispatch(getComment(comment)));

export const voteComment = comment => ({
  type: VOTE_COMMENT,
  comment,
});

export const fetchVoteComment = (commentId, option) => dispatch =>
  api
    .voteComment(commentId, option)
    .then(comment => dispatch(voteComment(comment)));

export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment,
});

export const fetchEditComment = (commentId, comment) => dispatch =>
  api
    .editComment(commentId, comment)
    .then(comment => dispatch(editComment(comment)));

export const deleteComment = commentId => ({
  type: DELETE_COMMENT,
  commentId,
});

export const fetchDeleteComment = commentId => dispatch =>
  api.deleteComment(commentId).then(() => dispatch(deleteComment(commentId)));


/*
export const invalidateComments = error => ({
  type: INVALIDATE_COMMENTS,
  error: error,
});

export const requestComments = () => ({
  type: REQUEST_COMMENTS,
});

export const receiveComments = response => ({
  type: RECEIVE_COMMENTS,
  comments: response,
});

export const fetchComments = (postId) => async dispatch => {
    console.log(postId);
  dispatch(requestComments());
  try {
    const response = await api.getAllComments(postId).then(postId);

    dispatch(receiveComments(response));

    console.log(response);
  } catch (error) {
    dispatch(invalidateComments(error));
  }
};

export const fetchAddComments = comment => async dispatch => {
  try {
    const response = await api.addComment(comment).then();

    dispatch(receiveComments(response));

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const voteComment = (commentId, option) => ({
  type: VOTE_COMMENTS,
  commentId,
  option,
});

export const fetchVoteComment = (commentId, option) => async dispatch => {
  try {

    const response = await api.voteComment(commentId, option).then();

    dispatch(voteComment(commentId, option));

    console.log(response);

  } catch (error) {
    console.log(error);
  }
};

export const editComment = comment => ({
  type: EDIT_COMMENTS,
  comment,
});

export const fetchEditComment = (commentId, comment) => async dispatch => {
  try {
    const response = await api.voteComment(commentId, comment).then();

    dispatch(editComment(response));

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = commentId => ({
  type: DELETE_COMMENTS,
  commentId,
});

export const fetchDeleteComment = commentId => async dispatch => {
  try {
    const response = await api.deleteComment(commentId).then();

    dispatch(deleteComment(response));

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};
*/
