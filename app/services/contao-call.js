import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'http://www.selina-buechel.ch',
  prefix: 'SimpleAjax.php?acid=ajaxrequest&',
  
  getElementsByArticle(articleId){
    var contaoURL = this.get('prefix') + "action=contentByArticle&id=" + articleId;
    var ajaxResult =  this.request(contaoURL);
    
    return ajaxResult;
  },
  
  getElementById(elementId){
    var contaoURL = this.get('prefix') + "action=contentById&id=" + elementId;
    var ajaxResult =  this.request(contaoURL);
    
    return ajaxResult;
  }
  
});