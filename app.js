console.log('hello world!');

var Board = function() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
}

Board.prototype = {
  print: function() {
    console.log('hey');
  }
}

var board = new Board();

board.print();
