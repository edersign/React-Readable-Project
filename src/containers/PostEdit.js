import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPost } from '../actions/post';
import { fetchComments } from '../actions/comment';
import PostForm from '../components/postsform';
import CommentsList from '../components/commentslist';

export class PostEdit extends React.PureComponent {
  componentDidMount() {
    const { postId } = this.props.match.params;

    // this.props.dispatch(fetchPost(postId));
    // this.props.dispatch(fetchComments(postId));
  }

  renderPostForm = () => {
    const { posts } = this.props;
    const post = { ...posts[0] };

    if (post.length === 0) {
      return <p>Loading posts...</p>;
     }
     if (!post.length === 0) {
      return <p>Oops, Failed to load post!</p>;
    }
    return;
   // return <PostForm post={post} />;

  };

  renderComments = () => {

    const { comments } = this.props;

    return;
    // return <CommentsList comments={comments} />;

  };

  render() {
    return <>
    <h1>uai qual o problema</h1>
      {/* this.renderPostForm()*/ }
      {/* this.renderComments()*/ }
      </>;
  }
}

function mapStateToProps({posts, comments}) {

  return {
    posts,
    comments,
  };
}


export default compose(
  withRouter,
  connect(
    mapStateToProps
  ),
)(PostEdit);
