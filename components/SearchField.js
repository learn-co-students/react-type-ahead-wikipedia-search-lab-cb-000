'use strict'

import React from 'react';

const SearchField = props => (
  <input className='search-field' onChange={props.onChange} value={props.value} />
);

export default SearchField;
