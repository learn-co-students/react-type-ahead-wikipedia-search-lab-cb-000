'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  <ul className="search-results">
    {
      results.map(result => (
        <li>
          <a href={result.link}>{result.title}</a>
          <p>{result.description}</p>
        </li>
      ))
    }
  </ul>
);

export default SearchResults;
