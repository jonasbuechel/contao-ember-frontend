import Ember from 'ember';

export default Ember.Route.extend({

  'contao-call': Ember.inject.service(),

  model() {

    var myresult = this.get('contao-call').getPages();
    //var myresult = this.get('contao-call').getElementsByArticle(17);
    //var myresult = this.get('contao-call').getElementById(79);
    
    Ember.Logger.log(myresult);
    
    return myresult;
  }
});
