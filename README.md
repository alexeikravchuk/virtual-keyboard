# [Virtual Keyboard](https://alexeikravchuk.github.io/virtual-keyboard)


1. Pressing a button on a physical keyboard selects a button pressed on a virtual keyboard.

2. The virtual keyboard can switch between Russian and English layouts (keyboard shortcut - ControlLeft + ShiftLeft), the characters of the selected language are displayed on the buttons.

3. The selected language is saved after page reload.

4. When you click on the buttons with the mouse on the virtual keyboard or when you click on the buttons on the physical keyboard, the input characters (textarea) located on the page above the keyboard are displayed. Pressing the down-up-left-right arrows will navigate the text field, pressing Enter will move the caret,
tab creates a horizontal indent, when the rest of the function keys are pressed, characters are not displayed, backspace deletes the character before the cursor, del deletes the character after the cursor.

- Used architectural pattern MVC.
- Styles are written using SASS technology.
- Build the project in webpack.
- Checked the code style in eslint in the source files (src folder);
