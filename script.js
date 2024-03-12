const bookshelf = document.querySelector(".bookshelf");
let myLibrary = [];

function Book(title, author, noOfPage) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.noOfPage = noOfPage;
}

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book);
}

function displayBooks() {
  for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    cubby = document.createElement("div");
    cubby.classList = "book";
    cubby.innerHTML = `${element.title}`;
    bookshelf.appendChild(cubby);
  }
}

for (let index = 0; index < 1; index++) {
  const Book1 = new Book("how to get balls", "James", 2002);
  addBookToLibrary(Book1);
  const Book2 = new Book("how to get cocks", "Patricia", 1982);
  addBookToLibrary(Book2);
  const Book3 = new Book("how to get semen", "Jennifer", 1999);
  addBookToLibrary(Book3);
}

displayBooks(myLibrary);

// ================
let inputBoxes = [];
let newBook;
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectTitle = favDialog.querySelector("#title");
const selectAuthor = favDialog.querySelector("#author");
const selectNoOfPage = favDialog.querySelector("#noOfPage");
const confirmBtn = favDialog.querySelector("#confirmBtn");

inputBoxes.push(selectTitle, selectAuthor, selectNoOfPage);

showButton.addEventListener("click", () => {
  newBook = new Book("default", "default", "0");
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
// Personal: 3 box into an array

inputBoxes.forEach((eachInput) => {
  eachInput.addEventListener("change", (e) => {
    newBook[eachInput.id] = eachInput.value;
    console.log(newBook);
  });
});

favDialog.addEventListener("close", (e) => {
  // this is remove the book
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close();
  myLibrary.push(newBook);
  displayBooks();
});
