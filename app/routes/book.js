import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('book', params.book_id);
  },
  setupController: function(controller, model) {
    controller.set('editBook', model);
  }
});
