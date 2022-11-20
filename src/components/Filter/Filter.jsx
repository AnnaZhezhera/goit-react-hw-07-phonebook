import React from 'react';
import { FilterBlock, FindContactWrapp } from './FilterBlock.styled';
import PropTypes from 'prop-types';
import { setNameFilter } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <FindContactWrapp>
      <FilterBlock>
        Find contacts by name
        <input
          type="text"
          name="filter"
          onChange={event => dispatch(setNameFilter(event.currentTarget.value))}
        />
      </FilterBlock>
    </FindContactWrapp>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
