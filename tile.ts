enum STATE {
    AVAILABLE = 'AVAILABLE',
    PLAYER1 = 'PLAYER1',
    PLAYER2 = 'PLAYER2'
}

export default class Tile {
    id: number
    status: STATE
    element: HTMLDivElement

    constructor(id: number) {
        this.id = id
        this.status = STATE.AVAILABLE
        this.element = document.createElement('div')
        this.element.classList.add('tile')
        this.element.classList.add(this.status.toLowerCase())
        this.element.addEventListener('click', () => {
            this.onClick()
        })
    }

    onClick() {
        if (this.status === STATE.AVAILABLE) {
            this.element.classList.remove(this.status.toLowerCase())
        }
    }

    get isSelected() {
        return this.status !== STATE.AVAILABLE
    }

}
