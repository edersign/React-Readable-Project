import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
import { connect } from 'react-redux';
import { fetchVotePost, fetchDeletePost } from '../actions/post';

import Vote from './vote';
import { ReactComponent as Calendar } from '../images/calendar.svg';
import { ReactComponent as Message } from '../images/message-circle.svg';
import { ReactComponent as User } from '../images/user.svg';
import { ReactComponent as Edit } from '../images/edit.svg';
import { ReactComponent as Delete } from '../images/delete.svg';

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
                    <PostEditOptionDelete onClick={() => this.deletePost(post.id)}>
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
          ),
        )}
      </>
    );
  }
}
// eslint-disable-next-line no-lone-blocks

/* 
id,
            category,
            title,
            voteScore,
            author,
            timestamp,
            commentCount,
            <Article id={id} key={id}>
              <PostSummary>
                <PostTitle>
                  <PostTitleLink to={`/${category}/${id}`}>
                    {title}
                  </PostTitleLink>
                </PostTitle>
                <CategoriesWrap>
                  <CategoriesLink to={`/${category}/`}>
                    #{category}
                  </CategoriesLink>
                </CategoriesWrap>
                <PostMeta>
                  <Timestamp title={formatDate(timestamp)}>
                    <IconCalendar /> {formatDate(timestamp)}
                  </Timestamp>
                  <Author>
                    <IconUser /> By: @{author}
                  </Author>
                  <Comments>
                    <IconMessage /> {commentCount}
                  </Comments>
                  <PostEdit>
                    <PostEditOption to={`/edit/${id}`}>
                      <IconEdit />
                      Edit
                    </PostEditOption>
                    <PostEditOptionDelete onClick={() => this.deletePost(id)}>
                      <IconDelete />
                      Delete
                    </PostEditOptionDelete>
                  </PostEdit>
                </PostMeta>
              </PostSummary>
              <Vote
                voteScore={voteScore}
                postId={id}
                onVoteUp={this.onVoteUp}
                onVoteDown={this.onVoteDown}
              />
            </Article>*/
PostsList.propTypes = {
  posts: PropTypes.any.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchVotePost: (postId, option) => dispatch(fetchVotePost(postId, option)),
  fetchDeletePost: postId => dispatch(fetchDeletePost(postId)),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(PostsList);

const Article = styled.article`
  position: relative;
  margin-bottom: 40px;
  background-color: #fff;
  display: flex;
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
const Comments = styled(Timestamp)``;
const IconCalendar = styled(Calendar)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: #999;
`;
const IconMessage = styled(Message)`
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
  font: 400 24px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
`;
const PostTitleLink = styled(Link)`
  color: #454545;
  text-decoration: none;
  transition: all 0.2s ease-out;
  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
const CategoriesWrap = styled.div`
  margin: 0 20px 10px;
`;

const CategoriesLink = styled(Link)`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  background-color: rgba(9, 30, 66, 0.04);
  color: rgb(0, 82, 204);
  border-radius: 3px;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 8px 20px;
  -webkit-text-decoration: none;
  text-decoration: none;
  align-items: baseline;
  transform: translate3d(0, 0, 0);
  filter: none;
  box-shadow: none;
  transition: all 0.2s ease-out;
  border-radius: 3px;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
  }
`;
const PostEdit = styled.div`
  display: flex;
`;
const PostEditOption = styled(Link)`
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
  margin: 0 2px 0 0;
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
