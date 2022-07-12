import Board from "./board";
import Player from "./player";

enum PLAYERS {
    PLAYER1 = 'PLAYER1',
    PLAYER2 = 'PLAYER2',
}

export default class Game {

    board: Board;
    players: Player[];
    playerIterator: number;
    element: HTMLDivElement;

    constructor(height: number, width: number) {
        this.board = new Board(height, width)
        // this.players = new Array()
        this.players = Array.from({ length: Object.values(PLAYERS).length }).map((_, index) => {
            Object.values(PLAYERS)[index]
            return new Player(Object.values(PLAYERS)[index])
        })
        this.playerIterator = 0;
        this.element = document.createElement('div')
        this.element.classList.add('game')
        this.element.appendChild(this.board.element)
        this.element.appendChild(this.players[this.playerIterator].element)
        this.addPlayerChangeMonitor()
    }

    addPlayerChangeMonitor() {
        this.board.rows.forEach((row) => {
            row.tiles.forEach((tile) => {
                tile.element.addEventListener('played', () => {
                    this.changePlayer()
                })
            })
        })
    }

    getCurrentPlayer() {
        return this.players[this.playerIterator]
    }

    changePlayer() {
        this.element.removeChild(this.getCurrentPlayer().element)
        this.playerIterator = (this.playerIterator + 1) % this.players.length
        this.element.appendChild(this.getCurrentPlayer().element)
    }




}