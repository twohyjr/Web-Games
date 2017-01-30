import Ember from 'ember';
import SharedStuff from '../../../mixins/games/tetris/handler';

export default Ember.Object.extend({

     init(ctx){

     },

     render(){
          let ctx = this.get('ctx');

          ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.fillRect(
                    (this.get('screenWidth')/2) - (this.get('cellSize')/2),
                    (this.get('screenHeight')/2) - (this.get('cellSize')/2),
                    this.get('cellSize'),
                    this.get('cellSize')
               );
          ctx.closePath();
     },

});
