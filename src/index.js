import Model from './js/Model';
import View from './js/View';
import Controller from './js/Controller';

class Keyboard {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.controller = new Controller();
  }

  init(container, textarea, keyboard) {
    this.view.init(this.model, textarea, keyboard);
    this.model.init(this.view);
    this.controller.init(this.model, container);
  }
}


window.onload = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.prepend(wrapper);

  wrapper.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard</h1>');

  const textarea = document.createElement('textarea');
  textarea.classList.add('text-field');
  wrapper.append(textarea);

  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard', 'keyboard_wrapper');
  wrapper.append(keyboardWrapper);

  const extraInfo = document.createElement('p');
  extraInfo.innerText = 'Change language - left Ctrl + Shift';
  wrapper.append(extraInfo);

  new Keyboard().init(wrapper, textarea, keyboardWrapper);
};
