# 🍕 Restaurant Ordering App

A small restaurant ordering web app built with **HTML, CSS and vanilla JavaScript**. Browse the menu, build an order, see a live total, and "pay" through a popup form.

**🔗 Live demo:** [ziadmohamed1911.github.io/resturant-ordring-app](https://ziadmohamed1911.github.io/resturant-ordring-app/)

## Features

- **Dynamic menu**: items (emoji, name, ingredients, price) are rendered from a JavaScript data array.
- **Add to order**: click the **+** button on any item. Adding the same item twice is supported.
- **Remove items**: remove any single row from the order, even when there are duplicates.
- **Live total**: the total price updates automatically whenever the order changes.
- **Payment popup**: **Complete order** opens a centered modal form with required fields. Clicking the dark backdrop closes it.
- **Confirmation message**: after paying, the order is cleared and a personalized "thank you" message appears.
- **Responsive layout**: built with Flexbox so it adapts to different screen sizes.

## Built with

- HTML5 (semantic structure)
- CSS3 (Flexbox, `position: fixed` modal overlay, transitions)
- JavaScript (ES modules, template literals, `map`, `find`, `reduce`, `splice`, event delegation, `FormData`)
- [Google Fonts](https://fonts.google.com/specimen/Smythe): Smythe

## Project structure

```
resturant-ordring-app/
├── index.html
├── style.css
├── index.js
├── data/
│   └── data.js        # menuArray: the menu items
└── images/
    └── header.png     # hero background
```

## Run it locally

ES modules need a server, so opening `index.html` by double-clicking will not work.

1. Clone the repo:
   ```bash
   git clone https://github.com/ziadmohamed1911/resturant-ordring-app.git
   ```
2. Open the folder in VS Code.
3. Install the **Live Server** extension, then right-click `index.html` → **Open with Live Server**.

## How it works

- **One click listener** on `document` handles the add, remove and complete-order buttons using `closest()` (event delegation). It keeps working even though the order section is re-rendered every time it changes.
- Each remove button stores its row's position in a `data-index` attribute, so the right item is removed with `splice`, even with duplicates.
- The order list and total are rendered together by a single function, so they never get out of sync.
- The customer's name is inserted with `textContent` rather than `innerHTML`, so typed text can't inject HTML.

## Note

This is a practice project. The payment form does not process payments or store any data. Please don't enter real card details.

## What I learned

- Rendering UI from data with template literals and `map`
- Event delegation and the `closest()` method
- Managing state with a plain array (`push`, `splice`, `reduce`)
- Building a modal with `position: fixed` and Flexbox
- Debugging with the browser console and VS Code

## Ideas for next steps

- Add quantities instead of repeating rows
- Save the order in `localStorage`
- Add a discount, such as a combo deal
- Improve form validation messages

## Author

**Ziad Mohamed**: aspiring frontend developer

- GitHub: [@ziadmohamed1911](https://github.com/ziadmohamed1911)
