import React from 'react';
import { FilterBlock } from './FilterBlock.styled';

const Filter = ({ value, onChange }) => (
  <FilterBlock htmlFor="">
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange} />
  </FilterBlock>
);
export default Filter;
