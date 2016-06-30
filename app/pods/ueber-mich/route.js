import Ember from 'ember';

export default Ember.Route.extend({

  'contao-call': Ember.inject.service(),

  model() {
    var store = this.store;
    
    return store.findAll('contao-page');
    
    /*var myresult = this.get('contao-call').getPages()
                       .then(function(results){
                          results.forEach(function(page){
                            store.createRecord('contao-page', {
                              title: page.title,
                              alias: page.alias,
                              id: page.id,
                              layout: page.layout,
                              pid: page.pid,
                              sorting: page.sorting,
                              title: page.title,
                              type: page.type
                            });
                          })
                       });*/
    
    //var myresult = this.get('contao-call').getElementsByArticle(17);
    //var myresult = this.get('contao-call').getElementById(79);
        
    return myresult;
  }
});

