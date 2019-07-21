'use strict';

import jsonp from 'jsonp';
import resultStore from '../stores/resultStore';
import wikipedia from '../utils/wikipedia';

const search = (query) => {
  const requested = new Date();

  return wikipedia.search(query).then((data) => {
    if (resultStore.isOutdated(requested)) {
      return;
    }
    var newResults = [];
    var j = 0;
    while(j < data[1].length){
      var newObject = {title:data[1][j],description:data[2][j],link:data[3][j]};
      j++;
      newResults.push(newObject);
    }
    resultStore.setState({results:newResults,updated:requested});
  });
};

export default { search };
