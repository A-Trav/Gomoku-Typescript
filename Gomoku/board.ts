import Row from "./row"

// Gomoku Board class
export default class Board {
    rows: Row[];
    element: HTMLDivElement;

    constructor(height: number, width: number) {
        this.rows = Array.from({ length: width }).map((_, index) => {
            return new Row(index, width);
        })
        this.element = document.createElement('div');
        this.element.classList.add('board');
        this.element.append(...this.rows.map((row) => row.element));
    }

    getPlayersTiles(player: string) {
        return this.rows.map((row) => row.playersTilesId(player));
    }

    getAvailableTiles() {
        return this.rows.map((row) => row.playersTilesId('AVAILABLE'));
    }
}
