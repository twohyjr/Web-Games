import Ember from 'ember';
import TempMixin from 'web-games/mixins/temp';
import { module, test } from 'qunit';

module('Unit | Mixin | temp');

// Replace this with your real tests.
test('it works', function(assert) {
  let TempObject = Ember.Object.extend(TempMixin);
  let subject = TempObject.create();
  assert.ok(subject);
});
