import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchPostsByCategories } from '../actions/post';
// import { selectedSort } from '../actions/sort';
// import Sort from '../components/sort';
// import PostsList from '../components/postlist';
import Categories from '../components/categories';
import Wrap from '../components/wrapper';

class PostbyCategory extends React.PureComponent {
  componentDidMount() {
    // console.log(this.props.match.params.category);
    this.props.dispatch(fetchPostsByCategories(this.props.match.params.category));
   // this.props.fetchPostsByCategories(this.props.match.params.category);
  }

  renderPostList = () => {
    const { posts } = this.props;

    // const post = { ...posts[0] };

    console.log(posts);
     /* if (posts.length === 0) {
      return <p>Loading posts...</p>;
    }
    if (!posts.length === 0) {
      return <p>Oops, Failed to load list!</p>;
    }*/

    // return <PostsList posts={posts[0]} sort={sort} />;
    /* return (
      <>
        {Object.keys(posts).map(key => {
          return (
            <div
              key={posts[key].title}>
              #{posts[key].title}
            </div>
          );
        })}
      </>
    );*/
  };

  render() {
    return (
      <Wrap>
        <h1>Teste</h1>
        <FeedOptions>
          <Categories />
        </FeedOptions>
        <Mainfeed>{this.renderPostList()}</Mainfeed>
      </Wrap>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
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
