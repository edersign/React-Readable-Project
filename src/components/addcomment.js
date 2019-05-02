import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { RIEInput, RIETextArea } from 'riek';
import Wrap from './wrapper';
import { fetchAddComment } from '../actions/comment';

import { ReactComponent as User } from '../images/user.svg';
import { ReactComponent as Edit } from '../images/edit.svg';

class AddCommentForm extends React.Component {
constructor(props) {
    super(props);

    this.state = {
      id: '',
      parentId: this.props.parentId,
      author: 'Click to add your nick name',
      body: 'Click to add your comment',
    };
  }
  onAuthorChange = e => {
    this.setState({ author: e.text });
  };

  onBodyChange = e => {
    this.setState({ body: e.textarea });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newcomment = {
      id: uuid(),
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.parentId,
      voteScore: 0,
    };
    console.log(newcomment);
    this.props.fetchAddComment(newcomment);
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
                  Comment!
                </PostEditOption>
              </PostEdit>
            </PostMeta>
          </PostSummary>
        </Article>
      </Wrap>
    );
  }
};

AddCommentForm.propTypes = {
  parentId: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchAddComment: newcomment => dispatch(fetchAddComment(newcomment)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(AddCommentForm);

const Article = styled.article`
  position: relative;
  margin-bottom: 40px;
  display: flex;
  flex: 1 1 auto;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  filter: none;
  box-shadow: none;
  transition: all 0.2s ease-out;
`;

const PostSummary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 800px;
  flex-direction: column;
  justify-content: flex-start;
    margin: auto;
    background: #f8f9fa;
`;

const PostTitle = styled.h3`
  font: 400 24px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
`;

const PostMeta = styled.div`
  width: 730px;
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
  background-color: rgb(0, 82, 204);
  color: rgb(255, 255, 255);
  border-radius: 3px;
  padding: 8px 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  transition: all 0.2s ease-out;
  justify-content: center;
  align-items: center;
  flex: 1;

  &:hover {
    background-color: #062048;
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
  }
`;

const IconEdit = styled(Edit)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const InputAuthor = styled(RIEInput)`
  border-style: none;
  transition: all 200ms ease;
  box-shadow: 0 0 0 2px #ccc;
    min-width: 450px;
    max-height: 70px;
    height: 30px;
    vertical-align: middle;
    text-align: left;
    padding: 10px;
    margin: 0 0 0 10px;
    line-height: 30px;
  vertical-align: middle;
  border-radius: 2px;
  &:focus {
    transition: all 200ms ease;
    outline: none;
    background-color: #ffeb3b6b;
    box-shadow: 0 0 0 2px #0052cc;
  }
`;

const TareaBody = styled(RIETextArea)`
  border-style: none;
  transition: box-shadow 100ms ease;
      width: 100%;
    display: block;
    min-width: 700px;
    max-width: 740px;
    max-height: 220px;
    min-height: 115px;
    margin: auto;
  transition: all 200ms ease;
  box-shadow: 0 0 0 2px #ccc;
    border-radius: 2px;
    padding: 10px; 
  vertical-align: middle;
  &:focus {
    transition: all 200ms ease;
    outline: none;
    background-color: #ffeb3b6b;
    box-shadow: 0 0 0 2px #0052cc;
  }
`;
