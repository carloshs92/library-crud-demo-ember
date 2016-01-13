/*import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { inject } = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
});
*/
// app/adapters/application.js
import config from '../config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';
export default FirebaseAdapter.extend({
	firebase: new Firebase(config.firebase),
	shouldReloadAll: function() { return true; }
});

/*
export default DS.JSONAPIAdapter.extend({
  shouldReloadRecord: function() { return true; },
  shouldReloadAll: function() { return true; },
  shouldBackgroundReloadRecord: function() { return true; },
  shouldBackgroundReloadAll: function() { return true; }
});
*/