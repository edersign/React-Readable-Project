import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const options = [
  { value: 'popular', text: 'Popular' },
  { value: 'unpopular', text: 'Unpopular' },
  { value: 'oldest', text: 'Oldest' },
  { value: 'newest', text: 'Newest' },
];

const Sort = ({ value, onChange }) => (
  <>
    <Select onChange={e => onChange(e.target.value)} value={value}>
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.text}
        </option>
      ))}
    </Select>
  </>
);

Sort.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Sort;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E%0A");
  background-position: 98% center;
  background-size: 15px;
  background-repeat: no-repeat;
  border-radius: 2px;
  border: none;
  padding: 8px 12px;
  transition: background-color 100ms ease, box-shadow 100ms ease;
  cursor: pointer;
  height: 45px;
  font-size: 16px;
  width: 20rem;
  background-color: #F1F5F8;
  color: #183247;
  box-shadow: 0 0 0 2px #dadfe3;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 4px #B8C2CC;
  }
`;
