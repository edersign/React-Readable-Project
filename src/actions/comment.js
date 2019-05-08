import * as api from '../utils/api';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
  ADD_COMMENT,
} from './ActionTypes';

export const getAllComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const fetchComments = commentId => dispatch =>
  api
    .getAllComments(commentId)
    .then(comments => dispatch(getAllComments(comments)));

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment,
});

export const fetchComment = commentId => dispatch =>
  api.getComment(commentId).then(comment => dispatch(receiveComment(comment)));

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment,
});

export const fetchAddComment = comment => dispatch =>
  api.addComment(comment).then(comment => dispatch(addComment(comment)));

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
