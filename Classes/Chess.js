import Board from './Board.js';
import Config from './Config.js';

class Chess {
  constructor(){
    this.element = document.querySelector('.chess');

    this.board = new Board();
    this.config = Config;
  }
}

export default Chess;

