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
          this.initializeHandler();
          let cell = Cell.create(this.get(ctx));

     },

     loop(){
          this.tickStuff();
          this.renderStuff();
          Ember.run.later(this, this.loop, 1000/60);
     },
});
