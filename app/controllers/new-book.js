import Ember from 'ember';

export default Ember.Controller.extend({
  isInvalid: true,
  newBook: null,
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
        title: this.get('title'),
        author: this.get('author'),
        cover: this.get('cover'),
        isNew: this.get('isNew'),
        description: this.get('description')
      }).save();
      */       
    }
  }
});