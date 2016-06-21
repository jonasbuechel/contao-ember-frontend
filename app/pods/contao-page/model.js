import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  alias: attr('string'),
  layout: attr('number'),
  pid: attr('number'),
  sorting: attr('number'),
  title: attr('string'),
  type: attr('string')
});
