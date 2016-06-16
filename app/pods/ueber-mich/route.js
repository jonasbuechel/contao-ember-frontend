import Ember from 'ember';

export default Ember.Route.extend({
    
    ajax: Ember.inject.service(),
    
    model() {
        var contaoURL = "http://www.selina-buechel.ch/SimpleAjax.php?acid=ajaxrequest&action=contentByArticle&id=17";
        var ajaxResult = this.get('ajax').request(contaoURL);
        Ember.Logger.log(ajaxResult);
        return ajaxResult;
    }
});
