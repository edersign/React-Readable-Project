import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { fetchPosts, fetchPostsByCategories } from '../actions/post';
import { selectedSort } from '../actions/sort';
import Sort from '../components/sort';
import PostsList from '../components/postlist';
import Categories from '../components/categories';
import Wrap from '../components/wrapper';
import Loader from '../components/load';
import { fetchCategories } from '../actions/category';
import { ReactComponent as Edit } from '../images/edit.svg';

export class Home extends React.PureComponent {

  componentDidMount() {
     const { dispatch } = this.props;

     dispatch(fetchPosts());
     dispatch(selectedSort());
     dispatch(fetchCategories());
  }

  handleChange = sort => {
    const { dispatch } = this.props;
    dispatch(selectedSort(sort));
  };

  onClickCat = (category) => {
   const { dispatch } = this.props;
   dispatch(fetchPostsByCategories(category));
  };

  onClickHome = () => {
     const { dispatch } = this.props;
     dispatch(fetchPosts());
  }

  renderPostList = () => {
    const { posts, sort, loading } = this.props;

    if (loading === false && posts.length === 0) {

      return <Loader />;
    }
    if (loading  === true && posts.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }

    return <PostsList posts={posts} sort={sort} />;
  };

  render() {
    const { categories, sort } = this.props;

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
          <ButtonWrap>
            <PostEditOption to={'/new'}>
              <IconEdit />
                  New post
            </PostEditOption>
          </ButtonWrap>
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
  return Object.assign({ dispatch }, bindActionCreators({
    fetchPosts, selectedSort, fetchCategories, fetchPostsByCategories,
  }, dispatch));
}

export default compose(
  withRouter,
  connect(
    mapStateToProps, mapDispatchToProps
  ),
)(Home);

const FeedOptions = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  margin: 10px 0;
`;

const SortWrap = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
`;

const ButtonWrap = styled.div`
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
const PostEditOption = styled(Link)`
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
    background-color: #B8C2CC;
  }
`;
const IconEdit = styled(Edit)`
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;