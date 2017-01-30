import Ember from 'ember';
import GamesTetrisKeyInputMixin from 'web-games/mixins/games/tetris/key-input';
import { module, test } from 'qunit';

module('Unit | Mixin | games/tetris/key input');

// Replace this with your real tests.
test('it works', function(assert) {
  let GamesTetrisKeyInputObject = Ember.Object.extend(GamesTetrisKeyInputMixin);
  let subject = GamesTetrisKeyInputObject.create();
  assert.ok(subject);
});
