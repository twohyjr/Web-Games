import Ember from 'ember';
import GamesPacManSharedStuffMixin from 'web-games/mixins/games/pac-man/shared-stuff';
import { module, test } from 'qunit';

module('Unit | Mixin | games/pac man/shared stuff');

// Replace this with your real tests.
test('it works', function(assert) {
  let GamesPacManSharedStuffObject = Ember.Object.extend(GamesPacManSharedStuffMixin);
  let subject = GamesPacManSharedStuffObject.create();
  assert.ok(subject);
});
