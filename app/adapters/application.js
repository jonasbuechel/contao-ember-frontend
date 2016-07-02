import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    /*headers: {
      'Authorization': 'Basic YXBpLWtleTpxdzlhNDd0d2Jv'
    },*/
    //TODO: bring in authorization
    host: 'http://www.selina-buechel.ch',
    namespace: 'api/v1',
    
  //---------------------------------------------------------------------
    // problem: there is a slash expected by server after collection name, 
    //          else a redirect 301 will happen to "... collection/"
    // solution: call the default buildURL and then append a slash
    //---------------------------------------------------------------------
    buildURL: function(type, id, record) {
      return this._super(type, id, record) + '/';
    }
    
});

