'use strict'

import React from 'react';

export default class SearchResults extends React.Component{
    render(){
      let resultsArray = this.props.results.map((result) =>
        <li key={result.title}><a href={result.link}>{result.title}</a><p>{result.description}</p></li>
      );
        return(
          <ul className='search-results'>
            {resultsArray}
          </ul>
        );
    }
}
