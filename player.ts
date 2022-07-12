export default class Player {
    name: string;
    element: HTMLElement;

    constructor(playerName: string) {
        this.name = playerName;
        this.element = document.createElement('div');
        this.element.id = this.name
        this.element.className = 'player'
    }
}