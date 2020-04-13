/* eslint-disable prefer-destructuring */
export default class Controller {
  constructor() {
    this.model = null;
    this.container = null;
    this.lastPressedKey = [null];
  }

  init(model, container) {
    this.model = model;
    this.container = container;
    this.addListeners();
  }

  addListeners() {
    document.addEventListener('keydown', (e) => this.keyAction(e));
    document.addEventListener('keyup', (e) => this.keyAction(e));
    document.addEventListener('mousedown', (e) => this.mouseAction(e));
    document.addEventListener('mouseup', (e) => this.mouseAction(e));
  }

  keyAction(e) {
    e.preventDefault();
    const keys = Array.from(this.container.querySelectorAll('.key'));
    const targetKey = keys.find((key) => key.dataset.code === e.code);
    if (targetKey) {
      this.determineKeyAction.call(this, targetKey, e);
    }
  }

  determineKeyAction(key, e) {
    if (e.type === 'keydown') {
      return this.keyDownAction(key);
    }
    return this.keyUpAction(key);
  }

  mouseAction(e) {
    if (e.type === 'mousedown' && e.target.classList.contains('key')) {
      return this.keyDownAction(e.target);
    }

    if (e.target.classList.contains('text-field')) {
      const cursorPosition = e.target.selectionStart;
      return this.model.moveCursore(cursorPosition);
    }

    const lastKey = this.lastPressedKey[this.lastPressedKey.length - 1];

    if (e.type === 'mouseup' && e.target.classList.contains('key')) {
      return this.keyUpAction(lastKey);
    }

    return null;
  }

  keyDownAction(key) {
    key.classList.toggle('active');
    this.lastPressedKey.push(key);
    if (!key.classList.contains('special_key')) {
      return this.model.addCharacterToLine(key.dataset.code);
    }
    return this.executeSpecialCommand(key);
  }

  keyUpAction(key) {
    this.lastPressedKey.shift();
    if (key.dataset.code !== 'CapsLock') {
      key.classList.remove('active');
    }
    if (key.classList.contains('special_key')) {
      this.specialKeyUpAction(key);
    }
  }

  executeSpecialCommand(key) {
    switch (key.dataset.code) {
      case 'Backspace':
        this.model.removeCharacter('before');
        break;
      case 'Tab':
        this.model.addTabToLine();
        break;
      case 'Delete':
        this.model.removeCharacter('after');
        break;
      case 'CapsLock':
        this.model.toggleCapsLock();
        break;
      case 'Enter':
        this.model.goToNewLine();
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.checkIsToggleLanguage();
        this.model.toggleUpperCase(true);
        break;
      case 'Space':
        this.model.addSpaceToLine();
        break;
      case 'ArrowLeft':
        this.model.moveCursore('left');
        break;
      case 'ArrowRight':
        this.model.moveCursore('right');
        break;
      case 'ArrowUp':
        this.model.moveCursore('up');
        break;
      case 'ArrowDown':
        this.model.moveCursore('down');
        break;
      default:
        return -1;
    }
    return -1;
  }

  specialKeyUpAction(key) {
    if (key.dataset.code === 'ShiftLeft' || key.dataset.code === 'ShiftRight') {
      this.model.toggleUpperCase(false);
    }
  }

  checkIsToggleLanguage() {
    let previousKey = this.lastPressedKey[0];
    if (this.lastPressedKey.length === 3) {
      previousKey = this.lastPressedKey[1];
    }
    if (previousKey && previousKey.innerText === 'ctrl') {
      this.model.toggleLanguage();
    }
  }
}
