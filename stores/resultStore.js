'use strict';

import Store from './Store';

class ResultStore extends Store{
  isOutdated(newDate){
    return this.getState().updated > newDate;
  }
}

const resultStore = new ResultStore({results: [], updated: new Date(),});

export default resultStore;
