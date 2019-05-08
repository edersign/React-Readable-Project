import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Categories = ({ categories, onClickCat, onClickHome }) => (
  <Tabs>
    {categories.map((category, index) => {
      return (
        <TabslistItenLink
          key={index}
          to={`/${category.name}/`}
          onClick={() => onClickCat(category.name)}
          activeClassName="active"
        >
          #{category.name}
        </TabslistItenLink>
      );
    })}
  </Tabs>
);

Categories.propTypes = {
  // categories: PropTypes.array.isRequired,
  onClickCat: PropTypes.func.isRequired,
};

export default withRouter(Categories);

const Tabs = styled.div`
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  white-space: nowrap;
`;
const TabslistItenLink = styled(NavLink)`
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
  &:hover.active {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: inset 0 -4px 0 0 #02b3e4;
    color: #777;
  }
  &.active {
    box-shadow: inset 0 -2px 0 0 #02b3e4;
    opacity: 1;
    color: #454545;
  }
`;
