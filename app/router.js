import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('games', function() {});
  this.route('pac-man');
  this.route('tetris');
});

export default Router;
