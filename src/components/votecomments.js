import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { votePost } from '../actions/post';
import { ReactComponent as Plus } from '../images/thumbs-up.svg';
import { ReactComponent as Minus } from '../images/thumbs-down.svg';

class voteComments extends React.Component {

  // handleVoteUpClick = (id, score) => {
    // console.log(id, score);
    // event.stopPropagation();
    // this.props.dispatch(votePost(this.props.id, this.props.score + 1));
    // this.props.dispatch(votePost(id, score + 1));
    // e.preventDefault();
    // console.log(this.dispatch(votePost()));
    // const { dispatch, votePost, id, score } = this.props;
    // dispatch(votePost(id, score + 1));
    // this.props.dispatch(votePost(this.props.postId));
    // console.log(this.props.id, this.props.score);
  // };
  // handleVoteDownClick = (id, score) => {
    // console.log(id, score);
    // this.props.dispatch(votePost(id, score - 1));
    // const { postId } = this.props.id;
    // const { score } = this.props.score - 1;
    // console.log(e);
    // e.stopPropagation();
    // console.log(this.props.id, this.props.score);
    // this.props.dispatch(votePost(this.props.postId));
    // const { dispatch, votePost, id, score } = this.props;
    // dispatch(votePost(id, score + 1));
  // };
  handleClick = ev => {
    ev.preventDefault();
    if ('Up') {
      console.log('sim Up');
      // props.unfavorite(article.slug);
    } else {
      console.log('nøao  Down');
      // props.favorite(article.slug);
    }
  };

  render() {
    const { commentscore, id } = this.props;
    // console.log(id);
    return (
      <PostScore id={id}>
        <ScoreCount>{commentscore}</ScoreCount>
        <PostScoreButtons>
          <PostScoreOption onClick={() => this.handleClick('Up')}>
            <IconPlus />
          </PostScoreOption>
          <PostScoreOption onClick={() => this.handleClick('Down')}>
            <IconMinus />
          </PostScoreOption>
        </PostScoreButtons>
      </PostScore>
    );
  }
}

voteComments.propTypes = {
  // CommentsScore: PropTypes.number.isRequired,
   id: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  //favorite: slug => dispatch({
    // type: ARTICLE_FAVORITED,
    // payload: agent.Articles.favorite(slug),
  //}),
  //unfavorite: slug => dispatch({
    // type: ARTICLE_UNFAVORITED,
    // payload: agent.Articles.unfavorite(slug),
  // }),
});


// export default connect(mapStateToProps)(voteComments);
export default connect(() => ({}), mapDispatchToProps)(voteComments);

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
