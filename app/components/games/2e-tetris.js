import Ember from 'ember';

export default Ember.Component.extend({

     screenWidth: 400,
     screenHeight: 800,
     cellSize: 50,

     actions: {
          startTetris(){
               let canvas = document.getElementById('tetrisCanvas');
               let ctx = canvas.getContext("2d");

               ctx.fillStyle = 'red';
               ctx.beginPath();
               ctx.fillRect(
                         (this.get('screenWidth')/2) - (this.get('cellSize')/2),
                         (this.get('screenHeight')/2) - (this.get('cellSize')/2),
                         this.get('cellSize'),
                         this.get('cellSize')
                    );
               ctx.closePath();
               ctx.fill();
          }
     },



});
