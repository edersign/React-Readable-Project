import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentForm from '../components/commentForm';

class CommentEdit extends React.PureComponent {

  renderPostForm = () => {

   const { comments } = this.props;


    const comment = comments.filter(item => {
      if (item.id === this.props.match.params.id) {
        return item;
      }
      return comment;
    });

    if (comment.length === 0) {
      return <p>Loading posts...</p>;
    }
    if (!comment.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <CommentForm comment={comment[0]} />;
  };

  render() {
    return <>{this.renderPostForm()}</>;
  }
}

function mapStateToProps({comments}) {

  return {
    comments,
  };
}

export default compose(
  withRouter,
  connect(mapStateToProps),
)(CommentEdit);
