import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';
import Handler from '../../mixins/games/tetris/handler';
import Cell from '../../models/games/tetris/cell';


export default Ember.Component.extend( Handler, KeyboardShortcuts,{

     cellSize: 50,

     actions: {
          startTetris(){
               let cell = Cell.create();
               this.set('cell', cell);
               this.loop();
          }
     },

     loop(){
          this.clearScreen();
          this.tickStuff();
          this.renderStuff();

          Ember.run.later(this, this.loop, 1000/60);
     },

     tickStuff(){
          let cell = this.get('cell');
          cell.tickStuff();
     },

     renderStuff(){
          let cell = this.get('cell');
          let ctx = this.get('ctx');
          cell.renderStuff(ctx);
     },

     clearScreen(){
          let ctx = this.get('ctx');
          ctx.fillStyle = '#393939';
          ctx.fillRect(
               0,
               0,
               this.get('screenWidth'),
               this.get('screenHeight')
          );
          ctx.closePath();
     },

     keyboardShortcuts: {
       up() { console.log("Up"); return false; },
       down()  { console.log("Down"); return false; },
       left() { console.log("Left"); return false; },
       right() {  console.log("Right"); return false; },
     },
});
