export default class Display {
    element: HTMLHeadingElement;

    constructor() {
        this.element = document.createElement('h2');
        this.element.classList.add('gameDisplay');
    }

    get getDisplayText() {
        return this.element.textContent;
    }

    set setDisplayText(text: string) {
        this.element.innerText = text;
    }

}