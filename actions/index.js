'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if (resultStore.isOutdated(requested)) return;

    const results = data[1].map((title, i) => {
      return {
        title: title,
        description: data[2][i],
        link: data[3][i]
      } 
    });

    resultStore.setState({
      updated: requested,
      results: results
    });
  });
};

export default { search };
