enum STATE {
    AVAILABLE = 'AVAILABLE',
    PLAYER1 = 'PLAYER1',
    PLAYER2 = 'PLAYER2'
}

// Tile class, used to display a tile for the board.
export default class Tile {
    id: number;
    status: STATE;
    element: HTMLDivElement;
    turnEvent: Event;

    constructor(id: number) {
        this.id = id;
        this.status = STATE.AVAILABLE;
        this.element = document.createElement('div');
        this.element.classList.add('tile');
        this.element.classList.add(this.status.toLowerCase());
        this.turnEvent = new Event('turn');
        this.element.addEventListener('click', () => {
            this.onClick();
        })
    }

    onClick() {
        if (this.status === STATE.AVAILABLE) {
            this.element.classList.remove(this.status.toLowerCase());
            this.element.classList.add(document.getElementsByClassName('player')[0].id.toLowerCase());
            this.status = <STATE>document.getElementsByClassName('player')[0].id;
            this.element.dispatchEvent(this.turnEvent);
        }
    }

    isPlayersTile(player: string) {
        if ((player as STATE) in STATE)
            return this.status === (player as STATE);
    }
}
