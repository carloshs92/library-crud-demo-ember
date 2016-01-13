import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations, {
  isInvalid: true,
  newBook: null,
  validations: {
    'newBook.title': {
      presence: true,
      length: { minimum: 5 }
    },
    'newBook.author': {
      numericality: true
    },
    'newBook.description': true
  },
  validForm: function(){
    var myBook = this.get('newBook');
    if(myBook.get('title') != undefined && myBook.get('author') != undefined && myBook.get('cover') != undefined){
      this.set('isInvalid', false);
    }else{
      this.set('isInvalid', true);
    }
  }.observes('newBook.title', 'newBook.author', 'newBook.cover'),
  actions: {
    "create-book": function(){
      this.get('newBook').save().then((book)=>{
        this.transitionToRoute('books');
      });
      
      /*
      this.store.createRecord('book', {
        title: this.get('newBook.title'),
        author: this.get('newBook.author'),
        cover: this.get('newBook.cover'),
        isPremiere: this.get('newBook.isPremiere'),
        description: this.get('newBook.description')
      }).save();
      this.transitionToRoute('books');     
      */
    }
  }
});