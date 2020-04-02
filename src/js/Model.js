export class Model {
  constructor() {
    this.language = null;
    this.view = null;
    this.specialKeys = null;
    this.characterKeys = null;
    this.isCapsLockOn = false;
    this.isUpperCase = false;
    this.numberOfKeys = 64;
    this.line = '';
    this.cursorPosition = 0;
  }

  init(view) {
    this.view = view;
    this.language = localStorage.language || 'en';
    this.specialKeys = JSON.parse(specialKeysJSON);
    this.characterKeys = JSON.parse(characterKeysJSON);
    this.update();
  }

  update() {
    this.view.drawKeyboard(this.numberOfKeys, this.specialKeys);
    this.updateCharacterKeys();
  }

  updateCharacterKeys() {
    this.view.updateCharacters(this.characterKeys, this.language, this.isUpperCase, this.isCapsLockOn);
  }

  changeLine(char) {
    this.line = this.line.slice(0, this.cursorPosition) + char + this.line.slice(this.cursorPosition, this.line.length);
    this.cursorPosition += char.length;
    this.view.updateText();
  }

  addCharacterToLine(code) {
    let char = this.characterKeys[code].value[this.language][this.isUpperCase ? 1 : 0];
    if(this.isCapsLockOn) { char = char.toUpperCase(); }
    this.changeLine(char);
  }

  addTabToLine() {
    let tab = '\t';
    this.changeLine(tab);
  }

  addSpaceToLine() {
    let space = ' ';
    this.changeLine(space);
  }

  goToNewLine() {
    let newLine = '\n';
    this.changeLine(newLine);
  }

  removeCharacter(position) {
    if(position === 'before') {
      this.line = this.line.slice(0, this.cursorPosition - 1) + this.line.slice(this.cursorPosition, this.line.length);
      this.cursorPosition--;
    } else {
      this.line = this.line.slice(0, this.cursorPosition) + this.line.slice(this.cursorPosition + 1, this.line.length);
    }
    this.view.updateText();
  }

  toggleCapsLock() {
    this.isCapsLockOn = !this.isCapsLockOn;
    this.updateCharacterKeys();
  }

  toggleUpperCase(isUpperCase) {
    this.isUpperCase = isUpperCase;
    this.updateCharacterKeys();
  }

  toggleLanguage() {
    this.language = this.language === 'en' ? 'ru' : 'en';
    this.updateCharacterKeys();
  }
}

const specialKeysJSON = '{"Backspace":{"id":13,"value":"backspace","width":"double_quarter"},"Tab":{"id":14,"value":"tab","width":"one_quarter"},"Delete":{"id":28,"value":"del","width":"plus_quarter"},"CapsLock":{"id":29,"value":"caps-lock","width":"one_half"},"Enter":{"id":41,"value":"enter","width":"double_quarter"},"ShiftLeft":{"id":42,"value":"shift","width":"double_quarter"},"ShiftRight":{"id":53,"value":"shift","width":"double_half"},"ControlLeft":{"id":54,"value":"ctrl","width":"one"},"MetaLeft":{"id":55,"value":"win","width":"one"},"AltLeft":{"id":56,"value":"alt","width":"one"},"Space":{"id":57,"value":"space","width":"seven"},"AltRight":{"id":58,"value":"alt","width":"one"},"ControlRight":{"id":59,"value":"ctrl","width":"plus_quarter"},"ArrowLeft":{"id":60,"value":"←","width":"one"},"ArrowUp":{"id":61,"value":"↑","width":"one_quarter_slim"},"ArrowDown":{"id":62,"value":"↓","width":"one_quarter_slim"},"ArrowRight":{"id":63,"value":"→","width":"one"}}';
const characterKeysJSON = '{"Backquote":{"id":0,"value":{"en":["`","~"],"ru":["ё","Ё"]}},"Digit1":{"id":1,"value":{"en":["1","!"],"ru":["1","!"]}},"Digit2":{"id":2,"value":{"en":["2","@"],"ru":["2","\\""]}},"Digit3":{"id":3,"value":{"en":["3","#"],"ru":["3","№"]}},"Digit4":{"id":4,"value":{"en":["4","$"],"ru":["4",";"]}},"Digit5":{"id":5,"value":{"en":["5","%"],"ru":["5","%"]}},"Digit6":{"id":6,"value":{"en":["6","^"],"ru":["6",":"]}},"Digit7":{"id":7,"value":{"en":["7","&"],"ru":["7","?"]}},"Digit8":{"id":8,"value":{"en":["8","*"],"ru":["8","*"]}},"Digit9":{"id":9,"value":{"en":["9","("],"ru":["9","("]}},"Digit0":{"id":10,"value":{"en":["0",")"],"ru":["0",")"]}},"Minus":{"id":11,"value":{"en":["-","_"],"ru":["-","_"]}},"Equal":{"id":12,"value":{"en":["=","+"],"ru":["=","+"]}},"KeyQ":{"id":15,"value":{"en":["q","Q"],"ru":["й","Й"]}},"KeyW":{"id":16,"value":{"en":["w","W"],"ru":["ц","Ц"]}},"KeyE":{"id":17,"value":{"en":["e","E"],"ru":["у","У"]}},"KeyR":{"id":18,"value":{"en":["r","R"],"ru":["к","К"]}},"KeyT":{"id":19,"value":{"en":["t","T"],"ru":["е","Е"]}},"KeyY":{"id":20,"value":{"en":["y","Y"],"ru":["н","Н"]}},"KeyU":{"id":21,"value":{"en":["u","U"],"ru":["г","Г"]}},"KeyI":{"id":22,"value":{"en":["i","I"],"ru":["ш","Ш"]}},"KeyO":{"id":23,"value":{"en":["o","O"],"ru":["щ","Щ"]}},"KeyP":{"id":24,"value":{"en":["p","P"],"ru":["з","З"]}},"BracketLeft":{"id":25,"value":{"en":["[","{"],"ru":["х","Х"]}},"BracketRight":{"id":26,"value":{"en":["]","}"],"ru":["ъ","Ъ"]}},"Backslash":{"id":27,"value":{"en":["\\\\","|"],"ru":["\\\\","/"]}},"KeyA":{"id":30,"value":{"en":["a","A"],"ru":["ф","Ф"]}},"KeyS":{"id":31,"value":{"en":["s","S"],"ru":["ы","Ы"]}},"KeyD":{"id":32,"value":{"en":["d","D"],"ru":["в","В"]}},"KeyF":{"id":33,"value":{"en":["f","F"],"ru":["а","А"]}},"KeyG":{"id":34,"value":{"en":["g","G"],"ru":["п","П"]}},"KeyH":{"id":35,"value":{"en":["h","H"],"ru":["р","Р"]}},"KeyJ":{"id":36,"value":{"en":["j","J"],"ru":["о","О"]}},"KeyK":{"id":37,"value":{"en":["k","K"],"ru":["л","Л"]}},"KeyL":{"id":38,"value":{"en":["l","L"],"ru":["д","Д"]}},"Semicolon":{"id":39,"value":{"en":[";",":"],"ru":["ж","Ж"]}},"Quote":{"id":40,"value":{"en":["\'","\\""],"ru":["э","Э"]}},"KeyZ":{"id":43,"value":{"en":["z","Z"],"ru":["я","Я"]}},"KeyX":{"id":44,"value":{"en":["x","X"],"ru":["ч","Ч"]}},"KeyC":{"id":45,"value":{"en":["c","C"],"ru":["с","С"]}},"KeyV":{"id":46,"value":{"en":["v","V"],"ru":["м","М"]}},"KeyB":{"id":47,"value":{"en":["b","B"],"ru":["и","И"]}},"KeyN":{"id":48,"value":{"en":["n","N"],"ru":["т","Т"]}},"KeyM":{"id":49,"value":{"en":["m","M"],"ru":["ь","Ь"]}},"Comma":{"id":50,"value":{"en":[",","<"],"ru":["б","Б"]}},"Period":{"id":51,"value":{"en":[".",">"],"ru":["ю","Ю"]}},"Slash":{"id":52,"value":{"en":["/","?"],"ru":[".",","]}}}';
