import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { formatDate } from '../utils/helpers';
import { connect } from 'react-redux';
import { fetchVotePost, fetchDeletePost } from '../actions/post';

import Vote from './vote';
import {
  Article,
  PostSummary,
  PostTitle,
  PostTitleLink,
  CategoriesWrap,
  CategoriesLink,
  PostMeta,
  Timestamp,
  IconCalendar,
  Author,
  IconUser,
  Comments,
  IconMessage,
  PostEditOption,
  PostEdit,
  IconEdit,
  PostEditOptionDelete,
  IconDelete,
} from './poststyle';

class PostsList extends React.PureComponent {
  onVoteUp = postId => {
    this.props.fetchVotePost(postId, 'upVote');
  };

  onVoteDown = postId => {
    this.props.fetchVotePost(postId, 'downVote');
  };
  deletePost = postId => {
  
    this.props.fetchDeletePost(postId);
  };

  render() {
    const { posts, sort } = this.props;
    const myData = [].concat(posts).sort((a, b) => {
      switch (sort) {
        case 'unpopular':
          return a.voteScore - b.voteScore;
        case 'oldest':
          return a.timestamp - b.timestamp;
        case 'newest':
          return b.timestamp - a.timestamp;
        default:
          return b.voteScore - a.voteScore;
      }
    });
    return (
      <>
        {myData.map((post, index) => (
          <Article id={post.id} key={index}>
            <PostSummary>
              <PostTitle>
                <PostTitleLink to={`/${post.category}/${post.id}`}>
                  {post.title}
                </PostTitleLink>
              </PostTitle>
              <CategoriesWrap>
                <CategoriesLink to={`/${post.category}/`}>
                  #{post.category}
                </CategoriesLink>
              </CategoriesWrap>
              <PostMeta>
                <Timestamp title={formatDate(post.timestamp)}>
                  <IconCalendar /> {formatDate(post.timestamp)}
                </Timestamp>
                <Author>
                  <IconUser /> By: @{post.author}
                </Author>
                <Comments>
                  <IconMessage /> {post.commentCount}
                </Comments>
                <PostEdit>
                  <PostEditOption to={`/edit/${post.id}`}>
                    <IconEdit />
                    Edit
                  </PostEditOption>
                  <PostEditOptionDelete
                    onClick={() => this.deletePost(post.id)}
                  >
                    <IconDelete />
                    Delete
                  </PostEditOptionDelete>
                </PostEdit>
              </PostMeta>
            </PostSummary>
            <Vote
              voteScore={post.voteScore}
              postId={post.id}
              onVoteUp={this.onVoteUp}
              onVoteDown={this.onVoteDown}
            />
          </Article>
        ))}
      </>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.any.isRequired,
};
/*
const mapDispatchToProps = dispatch => ({
  fetchVotePost: (postId, option) => dispatch(fetchVotePost(postId, option)),
  fetchDeletePost: postId => dispatch(fetchDeletePost(postId)),
});
*/
function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators(
      {
        fetchVotePost,
        fetchDeletePost,
      },
      dispatch,
    ),
  );
}
export default connect(
  () => ({}),
  mapDispatchToProps,
)(PostsList);
