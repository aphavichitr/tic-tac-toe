var Board = function() {
  this.board = [['', '', ''], ['', '', ''], ['', '', '']];
  this.moves = 0;
  this.limit = 9;
};

Board.prototype.play = function(player, p, x, y) {
  if (this.board[x][y] === '') {
    this.board[x][y] = p;
    this.moves++;
  }
  if(this.checkBoard(p, x, y)) {
    console.log('Player ' + player + 'wins!');
  } else {
    if (this.moves < this.limit) {
      console.log('Next player\'s turn');
    } else {
      console.log('Game Over, no one wins, try again?');
    }
  }
};

Board.prototype.checkBoard = function(p, x, y) {
  var row = 0;
  if (checkVer && checkHor && checkDiag) {
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkVer = function(x) {
  var vert = [];
  for (var i = 0; i < board.length; i++) {
    vert = this.board[x][i];
  }
  for (var j = 0; j < vert.length; j++) {
    if (vert[j + 1] !== undefined && vert[j] !== vert[j+1]) {
      return false;
    }
  }
  return true;
}

Board.prototype.checkHor = function(y) {
  var hor = [];
  for (var i = 0; i < board.length; i++) {
    vert = this.board[i][y];
  }
  for (var j = 0; j < vert.length; j++) {
    if (vert[j + 1] !== undefined && vert[j] !== vert[j+1]) {
      return false;
    }
  }
  return true;
}

Board.prototype.checkDiag = function(x, y) {
  if (x === 0 && y === 0) {
    if (this.board[x][y] === this.board[x+1][y+1] && this.board[x][y] === this.board[x+2][y+2]) {
      return true;
    } 
  } else if (x === 0 && y === 2) {
    if (this.board[x][y] === this.board[x+1][y-1] && this.board[x][y] === this.board[x+2][y-2]) {
      return true;
    } 
  } else if (x === 1 && y === 1) {
    if ((this.board[x][y] === this.board[x+1][y+1] && this.board[x][y] === this.board[x-1][y-1]) || (this.board[x][y] === this.board[x-1][y+1] && this.board[x][y] === this.board[x+1][y-1])) {
      return true;
    } 
  } else if (x === 2 && y === 0) {
    if (this.board[x][y] === this.board[x-1][y+1] && this.board[x][y] === this.board[x-2][y+2]) {
      return true;
    } 
  } else if (x === 2 && y === 2) {
    if (this.board[x][y] === this.board[x-1][y-1] && this.board[x][y] === this.board[x-2][y-2]) {
      return true;
    }
  }
}

console.log('Pick a box');
