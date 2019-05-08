import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CommentItem from './commentitem';
import FormComment from './addcomment';

const CommentstList = ({ comments, sort, onVoteUp, onVoteDown, postId }) => (
  <CommentsWrap>
    <CommentsSectionTitle>Comentários ({comments.length})</CommentsSectionTitle>
    {comments.length > 0 ? (
      comments
        .sort((a, b) => {
          switch (sort) {
            default:
              return b.timestamp - a.timestamp;
          }
        })
        .map(({ id, body, parentId, voteScore, author, timestamp }) => (
          <CommentItem
            key={id}
            id={id}
            parentId={parentId}
            body={body}
            timestamp={timestamp}
            voteScore={voteScore}
            author={author}
            onDeleteComment={() => this.onDeleteComment(id)}
            onVoteUp={() => this.onVoteUp(id)}
            onVoteDown={() => this.onVoteDown(id)}
          />
        ))
    ) : (
      <PostTitle>No comments to display</PostTitle>
    )}
    <FormComment parentId={postId} />
  </CommentsWrap>
);

CommentstList.propTypes = {
  comments: PropTypes.array,
};

export default CommentstList;

const CommentsWrap = styled.section`
  margin: auto;
`;

const CommentsSectionTitle = styled.h3`
  font: 400 18px/22px Helvetica, Arial, sans-serif;
  margin: 0 auto 20px;
`;

const PostTitle = styled.h3`
  font: 400 12px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
`;
