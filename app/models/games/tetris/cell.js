import Ember from 'ember';
import Handler from '../../../mixins/games/tetris/handler';

export default Ember.Object.extend(Handler,{

     x: 10,
     y: 10,

     tickStuff(){
          this.set('x',this.get('x') + 1);
     },

     renderStuff(ctx){
          ctx.fillStyle = 'red';
          ctx.beginPath();
          ctx.fillRect(
                    this.get('x'),
                    this.get('y'),
                    this.get('cellSize'),
                    this.get('cellSize')
               );
          ctx.closePath();
     },

});
