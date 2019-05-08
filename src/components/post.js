import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
import Wrap from './wrapper';
import Vote from './vote';
import { fetchVotePost, fetchDeletePost, fetchPost } from '../actions/post';

import {
  Article,
  PostSummary,
  PostTitle,
  PostBody,
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

class Posts extends React.PureComponent {
  onVoteUp = postId => {
    this.props.fetchVotePost(postId, 'upVote');
  };

  onVoteDown = postId => {
    this.props.fetchVotePost(postId, 'downVote');
  };

  deletePost = postId => {
    this.props.fetchDeletePost(postId);
    this.props.fetchPost(postId);

    this.props.history.push('/');
  };

  render() {
    const { post, commentCount } = this.props;
    return (
      <Wrap>
        <Article key={post.id}>
          <PostSummary>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
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
                <IconMessage /> {commentCount}
              </Comments>
              <PostEdit>
                <PostEditOption to={`/edit/${post.id}`}>
                  <IconEdit />
                  Edit
                </PostEditOption>
                <PostEditOptionDelete onClick={() => this.deletePost(post.id)}>
                  <IconDelete /> Delete
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
      </Wrap>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  fetchVotePost: (postId, option) => dispatch(fetchVotePost(postId, option)),
  fetchDeletePost: postId => dispatch(fetchDeletePost(postId)),
  fetchPost: (postId) => dispatch(fetchPost(postId)),
});

export default compose(
  withRouter,
  connect(
    () => ({}),
    mapDispatchToProps,
  ),
)(Posts);
