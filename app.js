console.log('hello world!');

var Board = function() {
  this.board = [[0,0,0],[0,0,0],[0,0,0]];
}

var board = new Board();

console.log(JSON.stringify(board));