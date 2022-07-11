import Row from "./row"

export default class Board {
    rows: Row[]
    element: HTMLDivElement

    constructor(height: number, width: number) {
        this.rows = Array.from({ length: width }).map((_, index) => {
            return new Row(index, width)
        })
        this.element = document.createElement('div')
        this.element.classList.add('board')
        this.element.append(...this.rows.map((row) => row.element))
        this.element.addEventListener('click', () => {
            this.getSelectTiles()
        })
    }

    getSelectTiles() {
        console.log(this.rows.map((row) => row.selectedTilesId).flat)
        return this.rows.map((row) => row.selectedTilesId)
    }

}
