import Ember from 'ember';

export default Ember.Route.extend({

  'contao-call': Ember.inject.service(),

  model() {
    var store = this.store;
    
    return store.findAll('contao-page');
    
  }
});

