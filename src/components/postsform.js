import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { formatDate } from '../utils/helpers';
import Wrap from './wrapper';
// import Vote from './vote';
// import { connect } from 'react-redux';
// import { fetchVotePost, fetchDeletePost } from '../actions/post';

// import { ReactComponent as Calendar } from '../images/calendar.svg';
// import { ReactComponent as Message } from '../images/message-circle.svg';
// import { ReactComponent as User } from '../images/user.svg';
// import { ReactComponent as Edit } from '../images/edit.svg';
// import { ReactComponent as Delete } from '../images/delete.svg';

class PostsForm extends React.PureComponent {
  render() {
    const { post } = this.props;
    return (
      <Wrap>
          <h1>carregou</h1>
        {/* <Article key={post.id}>
          <PostSummary>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <CategoriesWrap>
              <CategoriesLink to={`category/${post.category}/`}>
                #{post.category}
              </CategoriesLink>
            </CategoriesWrap>
            <PostMeta>
              <Timestamp title={formatDate(post.timestamp)}>
                <IconCalendar /> {formatDate(post.timestamp)}
              </Timestamp>
              <Author>
                <IconUser /> By:{' '}
                @{post.author}
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
                  <IconDelete /> Delete
                </PostEditOptionDelete>
              </PostEdit>
            </PostMeta>
          </PostSummary>
          <Vote
            voteScore={post.voteScore}
            postId={post.id}
            onVoteUp={this.onVoteUp}
            onVoteDown={this.onVoteDown} />
    </Article>*/}
      </Wrap>
    );
  }
}

PostsForm.propTypes = {
  post: PropTypes.object.isRequired,
};

// const mapDispatchToProps = dispatch => ({
//   fetchVotePost: (postId, option) => dispatch(fetchVotePost(postId, option)),
//   fetchDeletePost: (postId) => dispatch(fetchDeletePost(postId)),
// });

// export default connect(() => ({}), mapDispatchToProps)(PostsForm);
export default PostsForm;

/*
const Article = styled.article`
  position: relative;
  margin: 40px auto;
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
  font: 400 48px/68px Helvetica, Arial, sans-serif;
  margin: 40px;
`;
const PostBody = styled.p`
  margin: 0 40px 30px 40px;
`;
const CategoriesWrap = styled.div`
  margin: 0 40px 20px;
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
`;*/
