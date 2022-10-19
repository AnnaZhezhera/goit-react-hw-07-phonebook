import React from 'react';
import { FilterBlock, FindContactWrapp } from './FilterBlock.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <FindContactWrapp>
    <FilterBlock>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </FilterBlock>
  </FindContactWrapp>
);
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
