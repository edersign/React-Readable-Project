import {
  RECEIVE_COMMENTS,
RECEIVE_COMMENT,
EDIT_COMMENT ,
DELETE_COMMENT, 
VOTE_COMMENT,
ADD_COMMENT,
} from '../actions/comment';


const initialCommentsState = [];

export default function comments(state = initialCommentsState, action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      return [...state, action.comment];
    case RECEIVE_COMMENT:
      return [action.comment];
    case VOTE_COMMENT:
      return [...state, ...action.comment];
    case EDIT_COMMENT:
      return [...state, ...action.comment];
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.commentId);
    default:
      return state;
  }
};

/*
const initialState = {
  isFetchingComments: false,
  didInvalidateComments: false,
  allcomments: [],
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_COMMENTS:
      return {
        ...state,
        didInvalidateComments: true,
        error: action.error,
      };
    case REQUEST_COMMENTS:
      return {
        ...state,
        isFetchingComments: true,
        didInvalidateComments: false,
      };
    case RECEIVE_COMMENTS:
      return {
        ...state,
        isFetchingComments: false,
        didInvalidateComments: false,
        allcomments: action.posts,
      };
    case VOTE_COMMENTS:
      return Object.assign({}, state, {
        ...state,
        allcomments: state.allposts.map(post => {
          if (post.id !== action.postId) {
            return post;
          }

          return Object.assign({}, post, {
            voteScore: action.option,
          });
        }),
      });
    case EDIT_COMMENTS:
      return {
        ...state,
        ...action.post,
      };
    case DELETE_COMMENTS:
      return {
        ...state.filter(post => post.id !== action.postId),
      };
    default:
      return state;
  }
}
*/