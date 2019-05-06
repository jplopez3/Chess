import Chess from '../Classes/Chess.js'


var chess = new Chess();

   /** */
   var select = document.getElementById("board-select");
   select.addEventListener('change',(event) => {
    chess.board.loadBoard(event.target.value);
 });
 
   for(var index in chess.config.boards ) {
     select.options.add( new Option(index, index));
 }
 /** */
 