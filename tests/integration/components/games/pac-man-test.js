import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('games/pac-man', 'Integration | Component | games/pac man', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{games/pac-man}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#games/pac-man}}
      template block text
    {{/games/pac-man}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
