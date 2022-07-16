import Game from "./game"

let game;
let main = document.getElementById('main');
if (main !== null) {
    game = new Game(5, 5, main, 2);
}

