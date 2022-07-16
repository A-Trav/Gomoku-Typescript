import Board from "./board";

export default class Player {
    name: string;
    board: Board;
    element: HTMLElement;

    constructor(playerName: string, gameBoard: Board) {
        this.name = playerName;
        this.board = gameBoard;
        this.element = document.createElement('div');
        this.element.id = this.name;
        this.element.className = 'player';
        this.element.addEventListener('nextTurn', () => {
            this.checkForWin();
        })
    }

    checkForWin() {
        let playedTiles = this.board.getPlayersTiles(this.name);
        if (this.checkHorizontalWin(playedTiles) || this.checkVerticalWin(playedTiles) ||
            this.checkForwardDiagonalWin(playedTiles) || this.checkBackwardDiagonalWin(playedTiles))
            return true;
        else
            return false;
    }

    checkHorizontalWin(board: number[][]) {
        let counter = 0;
        let tile;
        for (let i = 0; i < board.length; i++) {
            if (board[i].length >= 5) {
                for (let j = 0; j < board[i].length; j++) { // tile 
                    counter = 0;
                    tile = board[i][j];
                    for (let k = 0; k < board[i].length; k++) {
                        if (tile === board[i][k]) {
                            tile++;
                            counter++;
                        }
                        else
                            break;
                    }
                    if (counter === 5)
                        return true;
                }
            }
        }
        return false;
    }

    checkVerticalWin(board: number[][]) {
        let counter = 0;
        for (let i = 0; i < board.length; i++) {
            if (i <= board.length - 5 && board[i].length > 0) {
                for (let j = 0; j < board[i].length; j++) { // tile 
                    counter = 0;
                    for (let k = 0; k < board.length; k++) {
                        if (board[k].length > 0) {
                            if (board[k].includes(board[i][j]))
                                counter++;
                            else
                                break;
                        }
                    }
                    if (counter === 5)
                        return true;
                }
            }
        }
        return false;
    }

    checkForwardDiagonalWin(board: number[][]) {
        let counter = 0;
        let tile: number;
        for (let i = 0; i < board.length; i++) {
            if (i <= board.length - 5 && board[i].length > 0) {
                for (let j = 0; j < board[i].length; j++) { // tile 
                    counter = 0;
                    tile = board[i][j];
                    for (let k = 0; k < board.length; k++) {
                        if (board[k].length > 0) {
                            if (board[k].includes(tile)) {
                                tile++;
                                counter++;
                            }
                            else
                                break;
                        }
                    }
                    if (counter === 5)
                        return true;
                }
            }
        }
        return false;
    }

    checkBackwardDiagonalWin(board: number[][]) {
        let counter = 0;
        let tile: number;
        for (let i = 0; i < board.length; i++) {
            if (i <= board.length - 5 && board[i].length > 0) {
                for (let j = 0; j < board[i].length; j++) { // tile 
                    counter = 0;
                    tile = board[i][j];
                    if (tile > 4) {
                        for (let k = 0; k < board.length; k++) {
                            if (board[k].length > 0) {
                                if (board[k].includes(tile)) {
                                    tile--;
                                    counter++;
                                }
                                else
                                    break;
                            }
                        }
                        if (counter === 5)
                            return true;
                    }
                }
            }
        }
        return false;
    }
}