import { makeAutoObservable } from 'mobx';

class ButtonControlViewModel {
    text = '';
    leftButtons = [];
    rightButtons = [];

    constructor() {
        makeAutoObservable(this);
    }

    setText(value) {
        this.text = value;
    }

    addButton(position, button) {
        if (position === 'left') {
            this.leftButtons.push(button);
        } else {
            this.rightButtons.push(button);
        }
    }
}

export default ButtonControlViewModel;
