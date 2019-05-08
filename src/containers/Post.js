import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { fetchPost } from '../actions/post';
import { fetchComments } from '../actions/comment';
import PostDetail from '../components/post';
import CommentsList from '../components/commentslist';
import Loader from '../components/load';

export class Post extends React.PureComponent {
  componentDidMount() {
    const { postId } = this.props.match.params;

    this.props.dispatch(fetchPost(postId));
    this.props.dispatch(fetchComments(postId));
  }

  renderPostDetail = () => {
    const { posts, loading } = this.props;

    const post = posts.filter(post => post.id === this.props.match.params.postId);
    const selectedpost = { ...posts[0] };

    if (loading === false && post.length === 0) {
      return <Loader />;
    }

    return <PostDetail post={selectedpost} />;
  };

  renderComments = () => {
    const { comments } = this.props;
    const { postId } = this.props.match.params;

    return <CommentsList comments={comments} postId={postId} />;
  };

  render() {
    const { posts } = this.props;

    const post = posts.filter(post => post.id === this.props.match.params.postId);
    return (
      <>
      {post.length > 0 ? (
        <>
        {this.renderPostDetail()}
        {this.renderComments()}
        </>
      ) : (
          <p> nao tem port </p>
        )}
      </>
    );
  }
}

function mapStateToProps({ posts, comments, loading }) {
  return {
    posts,
    comments,
    loading: loading.postsLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators(
      { fetchPost, fetchComments },
      dispatch,
    ),
  );
}

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(Post);

const PostTitle = styled.h3`
  font: 400 18px/28px Helvetica, Arial, sans-serif;
  margin: 100px auto;
  text-align: center;
`;
