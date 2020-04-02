# virtual-keyboard
RSS Virtual Keyboard

1. Pressing a button on the physical keyboard highlights the button pressed on the virtual.
2. The virtual keyboard can switch between Russian and English layouts (keyboard shortcut - AltLeft + ShiftLeft), the symbols of the selected language are displayed on the buttons.
3. The selected language is saved after page reload.
4. Clicking on the buttons with the mouse on the virtual keyboard or clicking on the buttons on the physical keyboard displays the characters in the input (textarea) located on the page above the keyboard. Pressing the down-up-left-right arrows either displays the corresponding arrow in input, or implements navigation on input, pressing enter should translate the carriage,
tab creates a horizontal indent, when the rest of the function keys are pressed in, characters are not output, backspace deletes the character before the cursor, del deletes the character after the cursor.

- The architectural pattern MVC is applied.
- Styles are written using SASS technology.
- Build the project in webpack.
