import React from 'react';
import { compose } from 'redux';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuid from 'uuid';
import { formatDate } from '../utils/helpers';
import Wrap from '../components/wrapper';
import { RIEInput, RIETextArea } from 'riek';
import { fetchAddPost } from '../actions/post';
import { bindActionCreators } from 'redux';

import { ReactComponent as Calendar } from '../images/calendar.svg';
import { ReactComponent as User } from '../images/user.svg';
import { ReactComponent as Edit } from '../images/edit.svg';

const selectOptions = [
  { id: 1, text: 'React', value: 'react' },
  { id: 2, text: 'Redux', value: 'redux' },
  { id: 3, text: 'Udacity', value: 'udacity' },
];
export class PostCrate extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: uuid(),
      category: 'react',
      title: 'Click to add title',
      author: 'Click to add your name',
      body: 'Click to add your content',
      voteScore: 0,
      commentCount: 0,
      timestamp: Date.now(),
      deleted: false,
    };
  }

  onCategoryChange = (e, result) => {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
  };

  onTitleChange = e => {
    this.setState({ title: e.text });
  };

  onAuthorChange = e => {
    this.setState({ author: e.text });
  };

  onBodyChange = e => {
    this.setState({ body: e.textarea });
  };

  handleSubmit = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    const post = {
      id: this.state.id,
      timestamp: this.state.timestamp,
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
      voteScore: this.state.voteScore,
      deleted: this.state.deleted,
      commentCount: this.state.commentCount,
    };
    dispatch(fetchAddPost(post));
  };

  render() {
    return (
      <Wrap>
        <Article key={this.state.id}>
          <EditLabel> Click the text to edit and save to a new post.</EditLabel>
          <PostSummary>
            <PostTitle>
              <InputTitle
                value={this.state.title}
                change={this.onTitleChange}
                propName="text"
              />
            </PostTitle>
            <PostBody>
              <TareaBody
                value={this.state.body}
                change={this.onBodyChange}
                propName="textarea"
              />
            </PostBody>
            <CategoriesWrap>
              <Select
                onChange={this.onCategoryChange}
                value={this.state.category}
              >
                {selectOptions.map((option, index) => (
                  <option value={option.value} key={index}>
                    {option.text}
                  </option>
                ))}
              </Select>
            </CategoriesWrap>
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
                  Save New Edit
                </PostEditOption>
              </PostEdit>
            </PostMeta>
          </PostSummary>
        </Article>
      </Wrap>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts: posts,
  };
}

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators({ fetchAddPost }, dispatch),
  );
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(PostCrate);

const Article = styled.article`
  position: relative;
  margin: 40px auto;
  background-color: #fff;
  display: flex; 
  flex: 1 0 auto;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  filter: none;
  box-shadow: none;
  transition: all 0.2s ease-out;
  border-radius: 3px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
  box-shadow: 0 0 0 2px #ffeb3b6b;
`;
const EditLabel = styled.p`
  position: absolute;
  top: -13px;
  left: -2px;
  padding: 5px 10px;
  border-bottom-left-radius: 3px;
  background-color: #ffeb3b6b;
  color: #866604;
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: none;
`;

const PostSummary = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
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
const PostTitle = styled.h3`
  font: 400 48px/68px Helvetica, Arial, sans-serif;
  margin: 40px;
  width: 90%;
`;

const PostBody = styled.p`
  margin: 0 40px 30px 40px;
`;
const CategoriesWrap = styled.div`
  margin: 0 40px 20px;
`;

const PostEdit = styled.div`
  display: flex;
`;
const PostEditOption = styled.button`
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
  margin: 0 2px 0 0;
  background-color: #F1F5F8;
  color: #183247;
  border: 2px solid #dadfe3;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

const IconEdit = styled(Edit)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
const InputTitle = styled(RIEInput)`
  border-style: none;
  transition: all 200ms ease;
  width: 100%;
  box-shadow: 0 0 0 2px transparent;
  cursor: pointer;
  vertical-align: middle;
  &:focus {
    transition: all 200ms ease;
    box-shadow: 0 0 0 2px #ccc;
    border-radius: 2px;
    outline: none;
    background-color: yellow;
  }
`;
const InputAuthor = styled(RIEInput)`
  border-style: none;
  transition: all 200ms ease;
  box-shadow: 0 0 0 2px transparent;
  cursor: pointer;
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
  max-height: 220px;
  min-height: 115px;
  transition: all 200ms ease;
  box-shadow: 0 0 0 2px transparent;
  cursor: pointer;
  &:focus {
    transition: all 200ms ease;
    border-radius: 2px;
    outline: none;
    background-color: yellow;
    box-shadow: 0 0 0 2px #ccc;
  }
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: rgba(0, 0, 0, 0.07);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E%0A");
  background-position: 98% center;
  background-size: 15px;
  background-repeat: no-repeat;
  border-radius: 2px;
  border: none;
  padding: 8px 12px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
  transition: background-color 100ms ease, box-shadow 100ms ease;
  cursor: pointer;
  height: 45px;
  font-size: 16px;
  width: 20rem;
  &:focus {
    transition: all 200ms ease;
    outline: none;
    background-color: yellow;
  }
`;
