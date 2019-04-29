import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchPosts } from '../actions/post';
import { selectedSort } from '../actions/sort';
import Sort from '../components/sort';
import PostsList from '../components/postlist';
import Categories from '../components/categories';
import Wrap from '../components/wrapper';

export class Home extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
    this.props.dispatch(selectedSort());
  }

  handleChange = sort => {
    this.props.dispatch(selectedSort(sort));
  };

  renderPostList = () => {
    const { posts, sort } = this.props;
    // console.log(posts);
    if (posts.length === 0) {
      return <p>Loading posts...</p>;
    }
    if (!posts.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <PostsList posts={posts} sort={sort} />;
  };

  render() {
    const { sort } = this.props;

    return (
      <Wrap>
        <FeedOptions>
          <Categories />
          <SortWrap>
            <Sort value={sort} onChange={this.handleChange} />
          </SortWrap>
        </FeedOptions>
        <Mainfeed>{this.renderPostList()}</Mainfeed>
      </Wrap>
    );
  }
}

const mapStateToProps = ({ posts, sorting }) => ({
    posts: posts,
    sort: sorting.sort,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(Home);

const FeedOptions = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  margin: 10px 0; 
`;

const SortWrap = styled.div`
  flex-direction: column;
  justify-content: flex-end;
  margin: auto 0 auto auto;
`;

const Mainfeed = styled.div`
  z-index: 0;
  position: relative;
  min-height: 350px;
  width: 100%;
`;
