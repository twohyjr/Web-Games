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
          //let cell = Cell.create();
          //this.set('cell', cell);
     },

     tickStuff(){

     },

     renderStuff(){
          //this.get('cell').render();
     },

     clearScreen(){

     },

});
