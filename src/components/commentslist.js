import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/helpers';
import VoteComments from './votecomments';
import { ReactComponent as Calendar } from '../images/calendar.svg';
import { ReactComponent as User } from '../images/user.svg';
import { ReactComponent as Edit } from '../images/edit.svg';
import { ReactComponent as Delete } from '../images/delete.svg';

const CommentstList = ({ comments }) => (
  <CommentsWrap>
    <CommentsSectionTitle>Comentários ({comments.length})</CommentsSectionTitle>
    {comments.length > 0 ? (
      comments
        .map(
          ({
            id,
            body,
            parentId,
            voteScore,
            author,
            timestamp,
          }) => (
            <Article key={id}>
              <PostSummary>
                <PostTitle>
                  {body}
                </PostTitle>
                <PostMeta>
                  <Timestamp title={formatDate(timestamp)}>
                    <IconCalendar /> {formatDate(timestamp)}
                  </Timestamp>
                  <Author>
                    <IconUser /> By:{' '}
                    <Link to={`author/@${author}/`}>@{author}</Link>
                  </Author>
                  <PostEdit>
                    <PostEditOption to={`/edit/${id}`}>
                      <IconEdit />
                      Edit
                    </PostEditOption>
                    <PostEditOptionDelete>
                      <IconDelete />
                      Delete
                    </PostEditOptionDelete>
                  </PostEdit>
                </PostMeta>
              </PostSummary>
              <VoteComments commentscore={voteScore} id={id} parentId={parentId} />
            </Article>
          ),
        )
    ) : (
          <PostTitle>teste</PostTitle>
        )}
  </CommentsWrap>
);

CommentstList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentstList;

const CommentsWrap = styled.section`
 width: 80%;
 margin:auto;
`;
const CommentsSectionTitle = styled.h3`
  font: 400 24px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
`;
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
  font: 400 24px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
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
`;

