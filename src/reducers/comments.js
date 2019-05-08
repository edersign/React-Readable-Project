import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  VOTE_COMMENT,
  ADD_COMMENT,
} from '../actions/ActionTypes';

const initialCommentsState = [];

export default function comments(state = initialCommentsState, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      return [...state, action.comment];
    case RECEIVE_COMMENT:
      return action.comment;
    case VOTE_COMMENT:
      return state
        .filter(comment => comment.id !== action.comment.id)
        .concat(action.comment);
    case EDIT_COMMENT:
      return state
        .filter(comment => comment.id !== action.comment.id)
        .concat(action.comment);
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId);
    default:
      return state;
  }
}
