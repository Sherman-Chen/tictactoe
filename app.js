'use strict';

console.log('hello world!');

var Board = function() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
} // end Board

Board.prototype = {
  print: function() {
    // this prints out the current status of the board
    console.log(this.board);
  }, // end print
  toggle: function(row, column) {
    // toggle should -> 
      // find the row and column within the respective row you wish to toggle
      // toggle the row as per your respective user (X or O);
        // before toggling it needs to check if the row is togglable (i.e. you cannot overwrite something that is already toggled)
      // upon successful toggle, print the board and then it will need to run checkWinner to see if the toggling created a game winning condition  
    for (var i = 0; i < this.board.length; i++) {
      console.log('toggling');
    }
  }, //end toggle
  checkWinner: function() {
    // should check to see if toggling a piece enabled a win condition

  }, // end checkWinner
  clear: function() {
    // resets board state to default
    this.board = [[0,0,0],[0,0,0],[0,0,0]];
  }
} // end Board.prototype

var board = new Board();

// board.print();
board.toggle();