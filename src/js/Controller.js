export default class Controller {
  constructor() {
    this.model = null;
    this.container = null;
    this.isShiftLeftOn = false;
    this.isShiftRightOn = false;
    this.isAltLeftOn = false;
    this.isAltRightOn = false;
    this.isControlLeftOn = false;
    this.isControlRightOn = false;
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
    const keys = this.container.querySelectorAll('.key');
    Array.from(keys).forEach((key) => this.determineKeyAction(e, key));
  }

  determineKeyAction(e, key) {
    if (key.getAttribute('data-code') === e.code) {
      if (e.type === 'keydown') {
        this.keyDownAction(key);
      } else {
        this.keyUpAction(key);
      }
    }
  }

  mouseAction(e) {
    if (e.target.classList.contains('key')) {
      if (e.type === 'mousedown') {
        this.keyDownAction(e.target, e);
      }
    } else if (e.target.classList.contains('text-field')) {
      const cursorPosition = e.target.selectionStart;
      this.model.moveCursore(cursorPosition);
    }
    if (e.type === 'mouseup') {
      const keys = this.container.querySelectorAll('.key');
      Array.from(keys).forEach((key) => this.keyUpAction(key));
    }
  }

  keyDownAction(key) {
    if (!key.classList.contains('special_key')) {
      this.model.addCharacterToLine(key.dataset.code);
    } else {
      this.specialKeyDownAction(key);
      if (key.dataset.code !== 'CapsLock') {
        key.classList.toggle('active');
      }
    }
  }

  keyUpAction(key) {
    if (key.dataset.code !== 'CapsLock') {
      key.classList.remove('active');
    }
    if (key.classList.contains('special_key')) {
      this.specialKeyUpAction(key);
    }
  }

  specialKeyDownAction(key) {
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
        this.isShiftLeftOn = true;
        this.changeLanguageCheck();
        this.model.toggleUpperCase(true);
        break;
      case 'ShiftRight':
        this.changeLanguageCheck();
        this.model.toggleUpperCase(true);
        this.isShiftRightOn = true;
        break;
      case 'ControlLeft':
        this.isControlLeftOn = true;
        this.changeLanguageCheck();
        break;
      case 'ControlRight':
        this.isControlRightOn = true;
        break;
      case 'AltLeft':
        this.isAltLeftOn = true;
        break;
      case 'AltRight':
        this.isAltLeftOn = true;
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
    switch (key.dataset.code) {
      case 'ShiftLeft':
        this.isShiftLeftOn = false;
        this.model.toggleUpperCase(false);
        break;
      case 'ShiftRight':
        this.isShiftRightOn = false;
        this.model.toggleUpperCase(false);
        break;
      case 'ControlLeft':
        this.isControlLeftOn = false;
        break;
      case 'ControlRight':
        this.isControlRightOn = false;
        break;
      case 'AltLeft':
        this.isAltLeftOn = false;
        break;
      case 'AltRight':
        this.isAltLeftOn = false;
        break;
      default:
        return -1;
    }
    return -1;
  }

  changeLanguageCheck() {
    if ((this.isShiftLeftOn || this.isShiftRightOn) && this.isControlLeftOn) {
      this.model.toggleLanguage();
    }
  }
}
