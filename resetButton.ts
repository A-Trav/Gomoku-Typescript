// Reset button class, used to reset the game.
export default class ResetButton {
    element: HTMLButtonElement;

    constructor() {
        this.element = document.createElement('button');
        this.element.classList.add('resetButton');
        this.element.textContent = 'Reset';
    }
}