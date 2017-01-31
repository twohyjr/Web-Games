import Ember from 'ember';

export default Ember.Mixin.create({

     cellSize: 50,
     rowsWide: 10,
     rowsHigh: 20,

     screenWidth: Ember.computed(function(){
       return this.get('cellSize') * this.get('rowsWide');
     }),

     screenHeight: Ember.computed(function(){
          return this.get('cellSize') * this.get('rowsHigh');
     }),

     ctx: Ember.computed(function(){
       let canvas = document.getElementById("tetrisCanvas");
       let ctx = canvas.getContext("2d");
       return ctx;
     }),

     initializeHandler(){

     },

     tickStuff(){

     },

     renderStuff(){

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

});
