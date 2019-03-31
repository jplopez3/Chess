import Board from './Board.js';

class Chess {
  constructor(){
    this.element = document.querySelector('.chess');

    this.board = new Board();
  }
}

export default Chess;