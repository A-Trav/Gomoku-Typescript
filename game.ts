import Board from "./board";
import DisplayController from "./displayController";
import Player from "./player";

enum PLAYERS {
    PLAYER1 = 'PLAYER1',
    PLAYER2 = 'PLAYER2',
}

export default class Game {

    board: Board;
    playerCount: number;
    players: Player[];
    playerIterator: number;
    boardSize: [number, number];
    gameOver: boolean;
    displayController: DisplayController;
    element: HTMLDivElement;
    parent: HTMLElement;

    constructor(height: number, width: number, parent: HTMLElement, playerCount: number) {
        this.boardSize = [height, width];
        this.board = new Board(height, width);
        this.parent = parent;
        this.playerCount = playerCount;
        this.displayController = new DisplayController();
        this.element = document.createElement('div');
        this.element.classList.add('game');
        this.setParent(this.parent);
        this.setupGame();
    }

    addPlayerChangeMonitor() {
        this.board.rows.forEach((row) => {
            row.tiles.forEach((tile) => {
                tile.element.addEventListener('turn', () => {
                    this.changePlayer();
                })
            })
        })
    }

    getCurrentPlayer() {
        return this.players[this.playerIterator];
    }

    changePlayer() {
        if (!this.checkPlayerWon() && !this.checkForDraw()) {
            this.element.removeChild(this.getCurrentPlayer().element);
            this.playerIterator = (this.playerIterator + 1) % this.players.length;
            this.element.appendChild(this.getCurrentPlayer().element);
            this.displayController.changeDisplay(this.getCurrentPlayer().name);
        }
    }

    checkPlayerWon() {
        if (!this.gameOver && this.getCurrentPlayer().checkForWin()) {
            this.gameOver = true;
            this.displayController.gameWon(this.getCurrentPlayer().name);
            this.element.removeChild(this.getCurrentPlayer().element);
            return true;
        }
        return false
    }

    checkForDraw() {
        let availableTile = this.board.getAvailableTiles();
        let result = true;
        for (let i = 0; i < availableTile.length; i++) {
            if (availableTile[i].length > 0)
                result = false;
        }
        if (result) {
            this.gameOver = true;
            this.displayController.gameDraw();
            this.element.removeChild(this.getCurrentPlayer().element);
        }
        return result;
    }

    setParent(parent: HTMLElement) {
        parent.appendChild(this.element);
        parent.appendChild(this.displayController.element);
    }

    setupGame() {
        this.gameOver = false;
        this.players = Array.from({ length: this.playerCount }).map((_, index) => {
            return new Player(Object.values(PLAYERS)[index], this.board);
        })
        this.playerIterator = 0;
        this.element.appendChild(this.board.element);
        this.element.appendChild(this.players[this.playerIterator].element);
        this.displayController.changeDisplay(this.getCurrentPlayer().name);
        this.addPlayerChangeMonitor();
        this.displayController.resetButton.element.addEventListener('click', () => this.resetGame());
    }

    resetGame() {
        this.element.removeChild(this.board.element);
        if (!this.gameOver)
            this.element.removeChild(this.getCurrentPlayer().element);
        this.board = new Board(this.boardSize[0], this.boardSize[1]);
        this.setupGame();
    }
}