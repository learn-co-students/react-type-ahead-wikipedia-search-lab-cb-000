'use strict'

import React from 'react';

const SearchField = props => (
  <input className='search-field' value={props.value} onChange={props.onChange} />
);

export default SearchField;
