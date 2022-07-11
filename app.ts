import Board from "./board"

const game = new Board(5, 5)
document.getElementById('game')?.appendChild(game.element)
