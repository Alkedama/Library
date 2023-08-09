import './assets/style.scss'

document.querySelector('#app').innerHTML = `
  <div>
    <button id="btnAdd">Add</button>
    <button id="btnView">View</button>

    <div id="bookContainer"></div>
  </div>
`

'use strict'

let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
}

Book.prototype.info = function(){
  if(this.read === true){
    return `{ Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: Yes }`;
  } else {
  return `{ Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: No }`;
  }
}

function addBookToLibrary(book){
  myLibrary.push(book);
}

let output = new Book('Magna Carta', 'Rudra', 100, false);

output.info();

const btnAdd = document.querySelector('#btnAdd');
const btnView = document.querySelector('#btnView');

const bookContainer = document.querySelector('#bookContainer');

const lblAdd = document.createElement('div');
const lblView = document.createElement('div')

btnAdd.addEventListener('click', () => {
  bookContainer.appendChild(lblAdd);

  console.log('clickAdd');
  addBookToLibrary(output);
  lblAdd.textContent = output.info();
});

btnView.addEventListener('click', () => {
  bookContainer.appendChild(lblView);

  console.log('clickView');
  let firstObject = myLibrary[0];

  console.log(firstObject.author);
  lblView.textContent = firstObject;
});