import React from 'react';
import PropTypes from 'prop-types';

import { FilterLabel, InputSearch } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <InputSearch
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={filter}
        onChange={onChange}
      />
      🔎
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
