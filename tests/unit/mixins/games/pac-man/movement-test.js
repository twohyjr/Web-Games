import Ember from 'ember';
import GamesPacManMovementMixin from 'web-games/mixins/games/pac-man/movement';
import { module, test } from 'qunit';

module('Unit | Mixin | games/pac man/movement');

// Replace this with your real tests.
test('it works', function(assert) {
  let GamesPacManMovementObject = Ember.Object.extend(GamesPacManMovementMixin);
  let subject = GamesPacManMovementObject.create();
  assert.ok(subject);
});
