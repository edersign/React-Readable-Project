import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../actions/post';
import PostForm from '../components/postsform';
import Loader from '../components/load';

export class PostEdit extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  renderPostForm = () => {
    const { posts } = this.props;
    const { postId } = this.props.match.params;

    const post = posts.filter(item => {
      if (item.id === postId) {
        return item;
      }
      return post;
    });

    if (post.length === 0) {
      return <Loader />;
    }
    if (!post.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <PostForm post={post[0]} />;
  };

  render() {
    return <>{this.renderPostForm()}</>;
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: posts,
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps),
)(PostEdit);
