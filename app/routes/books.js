import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  	var books = this.store.findAll('book');
    return this.store.findAll('book');

    //Ember.RSVP.hash({
    //  allBooks:  
      //all: this.store.findAll('book')
      //selected: this.store.findRecord('book', params.book_id)
    //});
  },
});

