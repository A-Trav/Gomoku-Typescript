import Tile from "./tile"

// Row class, used to display a row of tiles for the board.
export default class Row {
    id: number;
    tiles: Tile[];
    element: HTMLDivElement;

    constructor(id: number, tileCount: number) {
        this.id = id;
        this.tiles = Array.from({ length: tileCount }).map((_, index) => {
            const tileId = index;
            return new Tile(tileId);
        })
        this.element = document.createElement('div');
        this.element.classList.add('row');
        this.element.append(...this.tiles.map((tile) => tile.element));
    }

    playersTilesId(player: string) {
        return this.tiles.filter((tile) => tile.isPlayersTile(player)).map((tile) => tile.id);
    }
}