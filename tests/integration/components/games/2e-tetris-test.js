import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('games/2e-tetris', 'Integration | Component | games/2e tetris', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{games/2e-tetris}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#games/2e-tetris}}
      template block text
    {{/games/2e-tetris}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
