import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';

import { fetchPosts, fetchPostsByCategories } from '../actions/post';
import { selectedSort } from '../actions/sort';
import Sort from '../components/sort';
import PostsList from '../components/postlist';
import Categories from '../components/categories';
import Wrap from '../components/wrapper';
import { fetchCategories } from '../actions/category';
import Loader from '../components/load';

export class PostbyCategory extends React.PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPostsByCategories(this.props.match.params.category));
    dispatch(selectedSort());
    dispatch(fetchCategories());
  }

  handleChange = sort => {
    const { dispatch } = this.props;
    dispatch(selectedSort(sort));
  };

  onClickCat = category => {
    const { dispatch } = this.props;
    dispatch(fetchPostsByCategories(category));
  };

  onClickHome = () => {
    this.props.dispatch(fetchPosts());
  };
  renderPostList = () => {
    const { posts, sort, loading } = this.props;

    if (loading === false && posts.length === 0) {
      return <Loader />;
    }
    if (loading === true && posts.length === 0) {
      return (
        <Mainfeed>
          <RetrunTitle>
            No post to load at #{this.props.match.params.category}
          </RetrunTitle>
        </Mainfeed>
      );
    }

    return <PostsList posts={posts} sort={sort} />;
  };

  render() {
    const { sort, categories } = this.props;
    // console.log(loading);
    return (
      <Wrap>
        <FeedOptions>
          <Categories
            categories={categories}
            onClickCat={this.onClickCat}
            onClickHome={this.onClickHome}
          />
          <SortWrap>
            <Sort value={sort} onChange={this.handleChange} />
          </SortWrap>
        </FeedOptions>
        <Mainfeed>{this.renderPostList()}</Mainfeed>
      </Wrap>
    );
  }
}

const mapStateToProps = ({ posts, sorting, categories, loading }) => {
  return {
    posts,
    sort: sorting.sort,
    categories,
    loading: loading.postsLoaded,
  };
};

function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch },
    bindActionCreators(
      { fetchPostsByCategories, selectedSort, fetchCategories },
      dispatch,
    ),
  );
}
export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(PostbyCategory);

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
const RetrunTitle = styled.h3`
  font: 400 24px/28px Helvetica, Arial, sans-serif;
  margin: 20px;
`;
