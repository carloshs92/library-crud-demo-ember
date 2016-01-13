import Ember from 'ember';

export default Ember.Controller.extend({
  editBook: null,
  actions: {
    "update-book": function(){
      /*
      var book = this.get('editBook');
      this.store.findRecord('book', book.id).then(function(b) {
        b.set('title', book.get('title'));
        b.set('description', book.get('description'));
        b.set('cover', book.get('cover'));
        b.set('author', book.get('author'));
        b.set('isPremiere', book.get('isPremiere'));
      }).save();
      this.transitionToRoute('books');
      */
      
      this.get('editBook').save().then((book)=>{
        this.transitionToRoute('books');
      });
      
    },
    "delete-book": function(){
      var book = this.get('editBook');
      this.store.findRecord('book', book.id).then(function(b){
        //b.deleteRecord(); //Eliminado logico
        //b.get('isDeleteted'); //Confirma eliminacion
        //b.save(); //Persistencia de la eliminacion
        b.destroyRecord() //Elimina y persiste a la vez
      });
      
      this.transitionToRoute('books');
      /*
      this.get('editBook').destroyRecord()  
      this.transitionToRoute('books');
      */    
    }
  }
});
