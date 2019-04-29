import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchVotePost } from '../actions/post';
import { ReactComponent as Plus } from '../images/thumbs-up.svg';
import { ReactComponent as Minus } from '../images/thumbs-down.svg';
/*
class VoteScore extends React.PureComponent {
  onVoteUp = (postId, option) => {
    console.log(postId, 'upVote');
    // this.props.dispatch(fetchVotePost(postId, 'upVote'));
    // this.props.fetchVotePost(postId, 'upVote');
  };
  onVoteDown = (postId, option) => {
    console.log(postId, 'downVote');
    // this.props.dispatch(fetchVotePost(postId, 'downVote'));
    // this.props.fetchVotePost(postId, 'downVote');
  };

  render() {
    const { voteScore, postId } = this.props;
    // console.log(this.props);
    return (
      <PostScore postId={postId}>
        <ScoreCount>{voteScore}</ScoreCount>
        <PostScoreButtons>
          <PostScoreOption onClick={() => this.onVoteUp(postId, 'upVote')}>
            <IconPlus />
          </PostScoreOption>
          <PostScoreOption onClick={() => this.onVoteDown(postId, 'downVote')}>
            <IconMinus />
          </PostScoreOption>
        </PostScoreButtons>
      </PostScore>
    );
  }
}*/
const VoteScore = ({ postId, voteScore, onVoteUp, onVoteDown }) => (
  <PostScore postId={postId}>
    <ScoreCount>{voteScore}</ScoreCount>
    <PostScoreButtons>
      <PostScoreOption onClick={() => onVoteUp(postId, 'upVote')}>
        <IconPlus />
      </PostScoreOption>
      <PostScoreOption onClick={() => onVoteDown(postId, 'downVote')}>
        <IconMinus />
      </PostScoreOption>
    </PostScoreButtons>
  </PostScore>
);

VoteScore.propTypes = {
  voteScore: PropTypes.number,
  postId: PropTypes.string,
};

export default VoteScore;

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
  min-height: 75%;
  margin: auto;
  text-align: center;
  font-size: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
