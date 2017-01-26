import Ember from 'ember';
import Cell from '../../models/games/tetris/cell';

export default Ember.Component.extend({

     screenWidth: 400,
     screenHeight: 800,
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

          this.tickStuff();
          this.renderStuff();
          Ember.run.later(this, this.loop, 1000/60);
     },

     tickStuff(){

     },

     renderStuff(){
          this.get('cell').renderStuff();
     },

     clearScreen(){
          ctx.beginPath();

          ctx.closePath();
     },



});
