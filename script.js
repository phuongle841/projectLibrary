const bookshelf = document.querySelector(".bookshelf");
const myLibrary = [];

function Book(title, author, NoOfPage) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.NoOfPage = NoOfPage;
}

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book);
}

function displayBooks(myLibrary) {
  for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    cubby = document.createElement("div");
    cubby.innerHTML = `${element.title}`;
    console.log(element);
    bookshelf.appendChild(cubby);
  }
}

const Book1 = new Book("how to get balls", "James", 2002);
addBookToLibrary(Book1);
const Book2 = new Book("how to get cocks", "Patricia", 1982);
addBookToLibrary(Book2);
const Book3 = new Book("how to get semen", "Jennifer", 1999);
addBookToLibrary(Book3);

for (let index = 0; index < myLibrary.length; index++) {}

displayBooks(myLibrary);
