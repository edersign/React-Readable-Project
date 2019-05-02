import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from '../actions/post';
import { fetchComments } from '../actions/comment';
import PostDetail from '../components/post';
import CommentsList from '../components/commentslist';

export class Post extends React.PureComponent {
  componentDidMount() {
    const { postId } = this.props.match.params;

    this.props.dispatch(fetchPost(postId));
    this.props.dispatch(fetchComments(postId));
  }

  renderPostDetail = () => {
    const { posts } = this.props;
    const post = { ...posts[0] };

    if (post.length === 0) {
      return <p>Loading posts...</p>;
    }
    if (!post.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <PostDetail post={post} />;
  };

  renderComments = () => {
    const { comments } = this.props;
    const { postId } = this.props.match.params;

    return <CommentsList comments={comments} postId={postId} />;
  };

  render() {
    return (
      <>
        {this.renderPostDetail()}
        {this.renderComments()}
      </>
    );
  }
}

function mapStateToProps({ posts, comments }) {
  return {
    posts,
    comments,
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps),
)(Post);
