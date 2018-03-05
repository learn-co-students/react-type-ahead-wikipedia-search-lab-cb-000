'use strict'

import React from 'react';

const SearchResults = ({ results }) => (
  <ul className='search-results'>
    {
      results.map((r, i) => {
        return (
          <li key={i}>
            <a href={r.link}>{r.title}</a>
            <p>{r.description}</p>
          </li>
        )
      })
    }
  </ul>
);

export default SearchResults;
