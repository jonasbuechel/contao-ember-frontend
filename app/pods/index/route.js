import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var store = this.store;
    return store.findAll('contao-page');
  }
});
