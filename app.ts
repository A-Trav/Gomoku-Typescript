import Game from "./game"

// Gomoku game is created and run here. 
let main = document.getElementById('main');
if (main !== null) {
    const game = new Game(15, 15, main, 2);
}

