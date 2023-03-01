// button to add books to library
const addBookBtn = document.querySelector("#addBookBtn");
addBookBtn.addEventListener("click", addToLibrary);

let libArr = [];
let newBook = [];

// book constructor

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addToLibrary() {
  event.preventDefault();

  newBook = new Book(title, author, pages, read);
  libArr.push(newBook);
  addData();
  render();
}

// book ui element code here

//  dom elements
function addBook(item) {
  const library = document.querySelector("#Library-container");
  const bookEl = document.createElement("div");
  const titleEl = document.createElement("div");
  const authEl = document.createElement("div");
  const pageEl = document.createElement("div");
  const removeBtn = document.createElement("button");
  const readBtn = document.createElement("button");

  bookEl.classList.add("book");
  bookDiv.setAttribute("id", libArr.indexOf(item));

  titleEl.textContent = item.title;
  titleEl.classList.add("title");
  bookEl.appendChild(titleEl);

  authEl.textContent = item.author;
  authEl.classList.add("author");
  bookEl.appendChild(authEl);

  pageEl.textContent = item.pages;
  pageEl.classList.add("pages");
  bookEl.appendChild(pageEl);

  readBtn.classList.add("readBtn");
  bookEl.appendChild(readBtn);

  removeBtn.textContent = "Remove";
  removeBtn.setAttribute("id", "removeBtn");
  bookEl.appendChild(removeBtn);
}

// saves book data to local storage
function addData() {
  localStorage.setItem(`libArr`, JSON.stringify(libArr));
}

// displays books on refresh
function refreshPage() {
  if (!localStorage.libArr) {
    render();
  } else {
    let obj = localStorage.getItem("libArr");
    obj = JSON.parse(obj);
    libArr = obj;
    render();
  }
}

refreshPage();
