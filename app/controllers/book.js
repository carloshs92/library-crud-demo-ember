import Ember from 'ember';

export default Ember.Controller.extend({
  editBook: null,
  actions: {
    "update-book": function(){	
	    this.get('editBook').save().then((book)=>{
        this.transitionToRoute('books');
      });
    },
    "delete-book": function(){
    	this.get('editBook').destroyRecord()	
        this.transitionToRoute('books');
    }
  }
});
