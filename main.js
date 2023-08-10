import './assets/style.scss'

document.querySelector('#app').innerHTML = `
  <div>
    <button id="btnAdd" class="bg-slate-500/50 p-2 rounded">Add</button>
    <button id="btnView" class="bg-slate-500/50 p-2 rounded">View</button>
    <h1 class="text-3xl font-bold underline">
  </h1>
    <div id="libraryContainer"></div>
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
  book.info();
  libraryContainer.appendChild(lblAdd);

  lblAdd.textContent = book.info();
  myLibrary.push(book);
}

function viewBookFromLibrary(book){
  for(let i = 0; i < book.length; i++){
  console.log(book.length);
  const bookContainer = document.createElement('div');
  bookContainer.classList.add('bg-slate-500/50', 'p-2', 'rounded', 'm-2');

  libraryContainer.appendChild(bookContainer);
  
  const lblTitle = document.createElement('div');
  const lblAuthor = document.createElement('div');
  const lblPages = document.createElement('div');
  const lblRead = document.createElement('div');

  bookContainer.append(lblTitle, lblAuthor, lblPages, lblRead);

  lblTitle.textContent = book[i].author;
  lblAuthor.textContent = book[i].title;
  lblPages.textContent = book[i].pages;
  lblRead.textContent = book[i].read;

  const btnDelete = document.createElement('button');
  btnDelete.textContent = 'Delete';

  bookContainer.appendChild(btnDelete);
  btnDelete.classList.add('bg-red-500/50', 'p-2', 'rounded', 'mx-2');
  }
}

const btnAdd = document.querySelector('#btnAdd');
const btnView = document.querySelector('#btnView');

const libraryContainer = document.querySelector('#libraryContainer');

const lblAdd = document.createElement('div');

btnAdd.addEventListener('click', () => {
  console.log('clickAdd');
  let book = new Book('Magna Carta', 'Rudra', 100, false);

  addBookToLibrary(book);
});

btnView.addEventListener('click', () => {
  console.log('clickView');

  viewBookFromLibrary(myLibrary);
});