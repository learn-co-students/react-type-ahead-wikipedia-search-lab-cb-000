'use strict'

import React from 'react';
import actions from '../actions';
import resultStore from '../stores/resultStore';

import SearchField from './SearchField';
import SearchResults from './SearchResults';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: resultStore.getState().results,
      query: ''
    };
  }
  componentDidMount() {
    this.removeListener = resultStore.addListener(state => {
      this.setState({
        results: state.results
      });
    });
  }
  componentWillUnmount() {
    this.removeListener();
  }
  handleChange(ev) {
    const query = ev.target.value
    this.setState({
      query: query
    });
    if(query.length > 2) actions.search(query);
  }
  render() {
    return (
      <div className='autocomplete'>
        <h2>Autocomplete</h2>
        <SearchField value={this.state.query} onChange={this.handleChange.bind(this)} />
        <SearchResults results={this.state.results} />
      </div>
    );
  }
}

export default Autocomplete;
