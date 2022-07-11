import Tile from "./tile"

export default class Row {
    id: number
    tiles: Tile[]
    element: HTMLDivElement

    constructor(id: number, tileCount: number) {
        this.id = id
        this.tiles = Array.from({ length: tileCount }).map((_, index) => {
            const tileId = index
            return new Tile(tileId)
        })
        this.element = document.createElement('div')
        this.element.classList.add('row')
        this.element.append(...this.tiles.map((tile) => tile.element))
    }

    get selectedTilesId() {
        return this.tiles.filter((tile) => tile.isSelected).map((tile) => (tile.status, tile.id))
    }

}