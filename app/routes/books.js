import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    
    return this.store.findAll('book');

    //Ember.RSVP.hash({
    //  allBooks:  
      //all: this.store.findAll('book')
      //selected: this.store.findRecord('book', params.book_id)
    //});
  },
});
