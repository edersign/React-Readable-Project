import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCategories } from '../actions/category';

class Categories extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCategories();
  }
  renderCategories = () => {
    const { categories } = this.props;

    if (categories.length === 0) {
      return <p>Loading categories...</p>;
    }

    if (!categories.length === 0) {
      return <p>Oops, Failed to load list of categories!</p>;
    }

    return (
      <Tabs>
        {Object.keys(categories).map(key => {
          return (
            <TabslistItenLink
              key={categories[key].name}
              to={`category/${categories[key].name}/`}
            >
              #{categories[key].name}
            </TabslistItenLink>
          );
        })}
      </Tabs>
    );
  };

  render() {
    return <>{this.renderCategories()}</>;
  }
}

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
};
const mapStateToProps = ({ categories }) => ({
  categories,
});
export default connect(
  mapStateToProps,
  { fetchCategories },
)(Categories);

const Tabs = styled.div`
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  white-space: nowrap;
`;

const TabslistItenLink = styled(Link)`
  align-items: center;
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  padding: 0.5em 1em;
  vertical-align: top;
  background-color: rgba(9, 30, 66, 0.04);
  color: rgb(0, 82, 204);
  text-decoration: none;
  margin: 0 0 0 10px;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    transform: translate3d(0, -5px, 0);
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
  }
`;
