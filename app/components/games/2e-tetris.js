import Ember from 'ember';
import Handler from '../../mixins/games/tetris/handler';
import Cell from '../../models/games/tetris/cell';

export default Ember.Component.extend( Handler,{

     cellSize: 50,

     actions: {
          startTetris(){
               this.initializeTetris();
               this.loop();
          }
     },

     initializeTetris(){
          let cell = Cell.create();
          this.set('cell',cell);

     },

     loop(){
          let cell = this.get('cell');
          this.clearScreen();
          cell.tickStuff();
          cell.renderStuff(this.get('ctx'));

          Ember.run.later(this, this.loop, 1000/60);
     },
});
