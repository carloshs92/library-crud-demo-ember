import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact-me');
  this.resource('books', function(){
    this.resource('book', {path: '/:book_id'});
    this.resource('new-book', {path: '/create'});
  });
});

export default Router;
