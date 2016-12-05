console.log('hello world!');

var Board = function() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
}

Board.prototype = {
  print: function() {
    console.log(this.board);
  },
  toggle: function(row, column) {
    for (var i = 0; i < this.board.length; i++) {
      console.log('toggling');
    }
  }
}

var board = new Board();

// board.print();
board.toggle();