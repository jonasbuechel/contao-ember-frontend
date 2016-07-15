import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  alias: attr('string'),
  title: attr('string'),
  layout: attr('number'),
  pid: attr('number'),
  sorting: attr('number'),
  type: attr('string'),
  hide: attr('number')
});
