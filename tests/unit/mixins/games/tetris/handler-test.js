import Ember from 'ember';
import GamesTetrisHandlerMixin from 'web-games/mixins/games/tetris/handler';
import { module, test } from 'qunit';

module('Unit | Mixin | games/tetris/handler');

// Replace this with your real tests.
test('it works', function(assert) {
  let GamesTetrisHandlerObject = Ember.Object.extend(GamesTetrisHandlerMixin);
  let subject = GamesTetrisHandlerObject.create();
  assert.ok(subject);
});
