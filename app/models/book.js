import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  cover: DS.attr('string'),
  description: DS.attr('string'),
  isPremiere: DS.attr('boolean', {defaultValue: false})
});
