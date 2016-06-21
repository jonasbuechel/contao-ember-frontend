import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'http://www.selina-buechel.ch',
  prefix: 'SimpleAjax.php?auth=qw9a47twbo&',
  
  getPages(){
    var contaoURL = this.get('prefix') + "action=pages";
    var ajaxResultPromise =  this.request(contaoURL);
    
    return ajaxResultPromise;
  },
  
  getElementsByArticle(articleId){
    var contaoURL = this.get('prefix') + "action=contentByArticle&id=" + articleId;
    var ajaxResultPromise =  this.request(contaoURL);
    
    return ajaxResultPromise;
  },
  
  getElementById(elementId){
    var contaoURL = this.get('prefix') + "action=contentById&id=" + elementId;
    var ajaxResultPromise =  this.request(contaoURL);
    
    return ajaxResultPromise;
  }
  
});