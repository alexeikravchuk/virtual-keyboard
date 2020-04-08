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
  function createElement(tagName, ...classNames) {
    const element = document.createElement(tagName);
    classNames.forEach((name) => element.classList.add(name));
    return element;
  }

  const wrapper = createElement('div', 'wrapper');
  document.body.prepend(wrapper);

  wrapper.insertAdjacentHTML('afterbegin', '<h1>Virtual keyboard</h1>');

  const textarea = createElement('textarea', 'text-field');
  wrapper.append(textarea);

  const keyboardWrapper = createElement('div', 'keyboard', 'keyboard_wrapper');
  wrapper.append(keyboardWrapper);

  const extraInfo = createElement('p');
  extraInfo.innerText = 'Change language - left Ctrl + Shift. Windows';
  wrapper.append(extraInfo);

  new Keyboard().init(wrapper, textarea, keyboardWrapper);
};
