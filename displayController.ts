import ResetButton from "./resetButton";
import Display from "./display";

const GAMEPREFIX = 'Turn: ';
const GAMEOVERSUFFIX = ' has won the game';
const GAMEDRAW = 'Game over, Draw';

// Controller class to control the UI textual display
// and the reset button.
export default class DisplayController {
    display: Display;
    resetButton: ResetButton;
    element: HTMLDivElement;

    constructor() {
        this.display = new Display();
        this.resetButton = new ResetButton();
        this.element = document.createElement('div');
        this.element.classList.add('displayController');
        this.element.appendChild(this.display.element);
        this.element.appendChild(this.resetButton.element);
    }

    gameWon(player: string) {
        this.display.setDisplayText = player + GAMEOVERSUFFIX;
    }

    gameDraw() {
        this.display.setDisplayText = GAMEDRAW;
    }

    changeDisplay(player: string) {
        this.display.setDisplayText = GAMEPREFIX + player;
    }
}