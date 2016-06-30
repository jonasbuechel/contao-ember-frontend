import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    headers: {
      'Authorization': 'Basic YXBpLWtleTpxdzlhNDd0d2Jv'
    },
    host: 'http://www.selina-buechel.ch',
    namespace: 'api/v1'
    
});

//TODO: there is a slash expected by server after collection name, else a redirect 301 will happen to "... collection/"