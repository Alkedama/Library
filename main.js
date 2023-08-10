import './scss/tailwind.scss'
import './scss/style.scss'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="flex justify-center gap-x-5 mt-5">
      <button id="btnAdd" class="bg-slate-500/50 px-5 py-1 rounded">Add</button>
      <button id="btnView" class="bg-slate-500/50 px-5 py-1 rounded">View</button>
    </div>

    <div id="saveContainer"></div>

    <h1 class="text-3xl font-bold underline">
  </h1>
    <div id="libraryContainer" class="grid gridLibrary"></div>

    
    <div class="fixed inset-0" id="bookFormContainer">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      
      <section class="absolute inset-y-0 right-0 max-w-full flex">
        <div class="w-screen max-w-md">
          <div class="h-full flex flex-col bg-white shadow-xl">

            <header class="p-4 border-b">
              <h2 class="text-lg font-semibold">Add Book Form</h2>
            </header>
            
            <div class="flex-1 p-4 overflow-y-auto">
              <label for="txtTitle" class="text-sm font-medium text-slate-700">Title</label>
              <input id="txtTitle" type="text" placeholder="Title..." class="bg-white border border-slate-300 rounded-md
              shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-300 focus:ring-1 
              focus:ring-sky-300 required:border-red-500 px-2
              block mb-3" />

              <label for="txtAuthor" class="text-sm font-medium text-slate-700">Author</label>
              <input id="txtAuthor" type="text" placeholder="Author..." class="bg-white border border-slate-300 rounded-md
              shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-300 focus:ring-1 
              focus:ring-sky-300 required:border-red-500 px-2
              block mb-3" />

              <label for="txtPage" class="text-sm font-medium text-slate-700">Pages:</label>
              <input type="number" id="txtPage" value="1" min="1"
                class="bg-white border border-slate-300 rounded-md
                shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-300 focus:ring-1 
                focus:ring-sky-300 w-24 px-2
                block mb-3">
    
              <input type="checkbox" id="chkRead" class="checked:bg-blue-100" />
              <label for="chkRead" class="text-sm font-medium text-slate-700">Read</label>
            </div>

            <footer class="p-4 border-t flex justify-between">
            <button class="px-4 py-2 bg-blue-500 text-white rounded" id="btnClose">Close</button>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" id="btnSave">Save</button>
              
            </footer>
            
          </div>
        </div>
      </section>
    </div>
  </div>
`

'use strict'

let myLibrary = [];

const btnAdd = document.querySelector('#btnAdd');
const btnView = document.querySelector('#btnView');

const libraryContainer = document.querySelector('#libraryContainer');

function Book(title, author, pages, read) {
  this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

Book.prototype.info = function () {
    return `The book "${this.title}" written by ${this.author} with ${this.pages} pages has successfully been added to the library!`;
}

function addBookToLibrary(book) {
  myLibrary.push(book);

  bookFormContainer.classList.add('hidden');

  const SaveContainer = document.querySelector('#saveContainer');

  const lblSave = document.createElement('div');
  
  while (SaveContainer.firstChild) {
    SaveContainer.removeChild(SaveContainer.firstChild);
  }

  SaveContainer.appendChild(lblSave);
  lblSave.classList.add('bg-green-500/50', 'p-2', 'rounded', 'm-2', 'flex', 'justify-center');

  lblSave.textContent = book.info();
}

function viewBookFromLibrary(book) {
  for (let i = 0; i < book.length; i++) {
    console.log(book.length);
    const bookContainer = document.createElement('div');
    bookContainer.id = `bookContainer${i}`;
    bookContainer.classList.add('bg-slate-500/50', 'p-2', 'rounded', 'm-2', 'flex', 'flex-col');

    libraryContainer.appendChild(bookContainer);

    const lblTitle = document.createElement('h2');
    const lblAuthor = document.createElement('div');
    const lblPages = document.createElement('div');
    const lblRead = document.createElement('div');

    bookContainer.append(lblTitle, lblAuthor, lblPages, lblRead);

    lblTitle.textContent = book[i].title;
    lblAuthor.textContent = `By: ${book[i].author}`;
    lblPages.textContent = `Pages: ${book[i].pages}`;
    lblRead.textContent = (book[i].read) ? `Status: Read` : `Status: Unread`;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';
    btnDelete.id = i;

    btnDelete.addEventListener('click', () => {
      console.log(bookContainer.id);

      bookContainer.remove();

      myLibrary.splice(btnDelete.id, 1);
    })

    bookContainer.appendChild(btnDelete);
    btnDelete.classList.add('bg-red-500/50', 'p-2', 'rounded', 'mx-2', 'self-end', 'w-auto');
  }
}

btnAdd.addEventListener('click', () => {
  bookFormContainer.classList.remove('hidden');
});

btnView.addEventListener('click', () => {
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild);
  }

  viewBookFromLibrary(myLibrary);
});

const btnClose = document.querySelector('#btnClose');
const bookFormContainer = document.querySelector('#bookFormContainer');

btnClose.addEventListener('click', () => {
  bookFormContainer.classList.add('hidden');
});

const btnSave = document.querySelector('#btnSave');
const txtTitle = document.querySelector('#txtTitle');
const txtAuthor = document.querySelector('#txtAuthor');
const txtPage = document.querySelector('#txtPage');
const chkRead = document.querySelector('#chkRead');

btnSave.addEventListener('click', () => {
  let book = new Book(txtTitle.value, txtAuthor.value, txtPage.value, chkRead.checked);

  addBookToLibrary(book);
})