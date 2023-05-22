const fs = require('fs');

let listArray = [];

fs.readFile('./cond-dominios.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const listArray = data.split('\n');
  console.log(listArray);
});

function createButtons(listArr) {
  const container = document.createElement('div'); // create a new div to contain the buttons
  listArr.forEach(item => { // loop through each item in the array
    for (let i = 1; i <= 5; i++) { // create 5 buttons for each item
      const button = document.createElement('button');
      button.innerText = `Button ${i}`;
      button.className = 'button';
      buttonContainer.appendChild(button);
    }
    const br = document.createElement('br');
    buttonContainer.appendChild(br);
  })}
  createButtons();