import React from 'react';
import { FilterBlock, FindContactWrapp } from './FilterBlock.styled';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <FindContactWrapp>
      <FilterBlock>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </FilterBlock>
    </FindContactWrapp>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
