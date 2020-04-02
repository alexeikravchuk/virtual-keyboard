export class View {
  constructor() {
    this.model = null;
    this.container = null;
  }

  init(model, textarea, container) {
    this.model = model;
    this.textarea = textarea;
    this.container = container;

  }

  drawKeyboard(numberOfKeys, specialKeys) {
    let arrowsUpDown = document.createElement('div');
    arrowsUpDown.classList.add('up-down-arrows');

    //creating keys
    for(let i = 0; i < numberOfKeys; i++) {
      let key = document.createElement('div');
      key.classList.add('key');

      //set special-keys attributes
      specialKeys && Object.keys(specialKeys).forEach(specialKey => {
        if(specialKeys[specialKey].id === i) {
          key.classList.add('special_key', `special_key-${specialKeys[specialKey].width}`);
          key.setAttribute('data-code', specialKey);
          key.innerText = specialKeys[specialKey].value;
        }
      });

      if(!key.innerText) key.innerText = i;
      //creating block for arrowUp and arrowDown keys
      if (key.getAttribute('data-code') === 'ArrowUp') {
          arrowsUpDown.append(key);
          continue;
      } else if(key.getAttribute('data-code') === 'ArrowDown') {
          arrowsUpDown.append(key);
          this.container.append(arrowsUpDown);
          continue;
      }

      this.container.append(key);
    }
  }

  updateCharacters(characterKeys, language, isUpperCase, isCapsLock) {
    const keys = this.container.querySelectorAll('.key') || null;
    for(let code in characterKeys) {
      keys[characterKeys[code].id].setAttribute('data-code', code);
      let char = characterKeys[code].value[language][isUpperCase ? 1 : 0];
      if(isCapsLock) { char = char.toUpperCase(); }
      keys[characterKeys[code].id].innerText = char;
    }
  }

  updateText() {
    this.textarea.value = this.model.line;
    this.textarea.selectionStart = this.model.cursorPosition;
    this.textarea.selectionEnd = this.model.cursorPosition;
    setTimeout(() => this.textarea.focus(), 10);
  }
}

