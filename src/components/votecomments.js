import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Plus } from '../images/thumbs-up.svg';
import { ReactComponent as Minus } from '../images/thumbs-down.svg';

const voteScoreColor = voteScore => {
  if (voteScore.children > 0) {
    return { color: '#4CAF50' };
  } else if (voteScore.children < 0) {
    return { color: '#f44336' };
  } else {
    return { color: '#888' };
  }
};

const voteComments = ({ commentscore, id, onVoteUp, onVoteDown }) => (
  <PostScore id={id}>
    <ScoreCount>{commentscore}</ScoreCount>
    <PostScoreButtons>
      <PostScoreOption onClick={() => onVoteUp(id, 'upVote')}>
        <IconPlus />
      </PostScoreOption>
      <PostScoreOption onClick={() => onVoteDown(id, 'downVote')}>
        <IconMinus />
      </PostScoreOption>
    </PostScoreButtons>
  </PostScore>
);

voteComments.propTypes = {
  commentscore: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onVoteUp: PropTypes.func,
  onVoteDown: PropTypes.func,
};

export default voteComments;

const PostScore = styled.div`
  width: 10%;
  flex: 1;
  justify-content: flex-end
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: auto;
  background-color: #F4F5F7;
  border-left: solid 1px rgba(102,119,136,.05);
`;

const ScoreCount = styled.div`
  min-height: 55%;
  margin: auto;
  text-align: center;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${voteScoreColor};
`;
const PostScoreButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostScoreOption = styled.div`
  box-sizing: border-box;
  clear: both;
  padding: 10px;
  border-radius: 3px;
  &:hover {
    background: rgba(9, 30, 66, 0.4);
  }
`;
const IconPlus = styled(Plus)`
  display: block;
  width: 24px;
  height: 24px;
`;
const IconMinus = styled(Minus)`
  display: block;
  width: 24px;
  height: 24px;
`;
