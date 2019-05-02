import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
import Wrap from './wrapper';
import { fetchEditComment, fetchDeleteComment } from '../actions/comment';
import { fetchPost } from '../actions/post';

import { RIEInput, RIETextArea } from 'riek';
import VoteComments from './votecomments';

import { ReactComponent as Calendar } from '../images/calendar.svg';
import { ReactComponent as User } from '../images/user.svg';
import { ReactComponent as Edit } from '../images/edit.svg';
import { ReactComponent as Delete } from '../images/delete.svg';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      id: this.props.comment.id,
      parentId: this.props.comment.parentId,
      timestamp: this.props.comment.timestamp,
      author: this.props.comment.author,
      body: this.props.comment.body,
      voteScore: this.props.comment.voteScore,
      parentDeleted: this.props.comment.parentDeleted,
    };
  }

  onVoteUp = () => {
    this.setState({ voteScore: this.props.comment.voteScore + 1 });
  };

  onVoteDown = () => {
    this.setState({ voteScore: this.props.comment.voteScore - 1 });
  };

  deletePost = () => {
    this.props.fetchDeleteComment(this.state.id);
    this.props.fetchPost(this.state.parentId);

    this.props.history.push('/');
  };

  onAuthorChange = e => {
    this.setState({ author: e.text });
  };

  onBodyChange = e => {
    this.setState({ body: e.textarea });
  };

  handleSubmit = e => {
    e.preventDefault();
    const comment = {
      id: this.state.id,
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      voteScore: this.state.voteScore,
      parentDeleted: this.state.parentDeleted,
    };
    this.props.fetchEditComment(this.state.id, comment);
  };

  render() {
    return (
      <Wrap>
        <Article key={this.state.id} parentId={this.state.parentId}>
          <PostSummary>
            <PostTitle>
              <TareaBody
                value={this.state.body}
                change={this.onBodyChange}
                propName="textarea"
              />
            </PostTitle>
            <PostMeta>
              <Timestamp title={formatDate(this.state.timestamp)}>
                <IconCalendar /> {formatDate(this.state.timestamp)}
              </Timestamp>
              <Author>
                <IconUser /> By:{' '}
                <InputAuthor
                  value={this.state.author}
                  change={this.onAuthorChange}
                  propName="text"
                />
              </Author>
              <PostEdit>
                <PostEditOption onClick={this.handleSubmit}>
                  <IconEdit />
                  Edit
                </PostEditOption>
                <PostEditOptionDelete onClick={this.deletePost}>
                  <IconDelete />
                  Delete
                </PostEditOptionDelete>
              </PostEdit>
            </PostMeta>
          </PostSummary>
          <VoteComments
            commentscore={this.state.voteScore}
            id={this.state.id}
            onVoteUp={this.onVoteUp}
            onVoteDown={this.onVoteDown}
          />
        </Article>
      </Wrap>
    );
  }
}

CommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchEditComment: (commentId, comment) =>
    dispatch(fetchEditComment(commentId, comment)),
  fetchDeleteComment: commentId => dispatch(fetchDeleteComment(commentId)),
  fetchPost: postId => dispatch(fetchPost(postId)),
});

export default compose(
  withRouter,
  connect(
    () => ({}),
    mapDispatchToProps,
  ),
)(CommentForm);

const Article = styled.article`
  position: relative;
  margin-bottom: 40px;
  background-color: #fff;
  display: flex;
  cursor: pointer;
  flex: 1 1 auto;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  filter: none;
  box-shadow: none;
  transition: all 0.2s ease-out;
  border-radius: 3px;
  border: 1px solid #e8e8e8;
`;

const PostSummary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
`;

const PostTitle = styled.h3`
  font: 400 24px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
`;

const PostMeta = styled.div`
  width: calc(100% - 60px);
  background: #f8f9fa;
  color: #678;
  border-top: solid 1px rgba(102, 119, 136, 0.05);
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 20px 30px;
  justify-content: space-between;
`;
const Timestamp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 auto;
  color: rgba(50, 59, 64, 0.8);
  font-weight: 500;
  text-align: center;
`;
const Author = styled(Timestamp)``;

const IconCalendar = styled(Calendar)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: #999;
`;

const IconUser = styled(User)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: #999;
`;
const PostEdit = styled.div`
  display: flex;
`;

const PostEditOption = styled.a`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  background-color: rgba(9, 30, 66, 0.04);
  color: rgb(0, 82, 204);
  border-radius: 3px;
  padding: 8px 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all 0.2s ease-out;
  justify-content: center;
  align-items: center;
  flex: 1;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
  }
`;

const PostEditOptionDelete = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  border-radius: 3px;
  padding: 8px 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all 0.2s ease-out;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: rgba(245, 150, 126, 0.8);
  color: #fff;
  &:hover {
    background: rgba(245, 150, 126, 1);
  }
`;

const IconEdit = styled(Edit)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const IconDelete = styled(Delete)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
const InputAuthor = styled(RIEInput)`
  border-style: none;
  transition: all 200ms ease;
  box-shadow: 0 0 0 2px transparent;

  vertical-align: middle;
  &:focus {
    transition: all 200ms ease;
    border-radius: 2px;
    outline: none;
    background-color: yellow;
    box-shadow: 0 0 0 2px #ccc;
  }
`;

const TareaBody = styled(RIETextArea)`
  border-style: none;
  transition: box-shadow 100ms ease;
  width: 100%;
  display: block;
  min-width: 500px;
  max-width: 740px;
  max-height: 220px;
  min-height: 115px;
  transition: all 200ms ease;
  box-shadow: 0 0 0 2px transparent;

  vertical-align: middle;
  &:focus {
    transition: all 200ms ease;
    border-radius: 2px;
    outline: none;
    background-color: yellow;
    box-shadow: 0 0 0 2px #ccc;
  }
`;
