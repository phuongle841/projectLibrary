const bookshelf = document.querySelector(".bookshelf");
let myLibrary = [];

let id = 0;
function Book(title, author, noOfPage) {
  // the constructor...
  this.id = id++;
  this.title = title;
  this.author = author;
  this.noOfPage = noOfPage;
}

function addBookToLibrary(Book) {
  // do stuff here
  myLibrary.push(Book);
}

function displayPresetBooks() {
  for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    addBook(element);
  }
}

function addBook(book) {
  let cubby = document.createElement("div");
  let removeBtn = document.createElement("button");
  let cover = document.createElement("img");
  let titleP = document.createElement("p");

  removeBtn.innerText = "remove";
  titleP.innerText = `${book.title}`;
  cubby.appendChild(titleP);
  cubby.appendChild(removeBtn);
  cubby.classList = "book";
  bookshelf.appendChild(cubby);
  console.log(book);
}
for (let index = 0; index < 1; index++) {
  const Book1 = new Book("how to get balls", "James", 2002);
  addBookToLibrary(Book1);
  const Book2 = new Book("how to get cocks", "Patricia", 1982);
  addBookToLibrary(Book2);
  const Book3 = new Book("how to get semen", "Jennifer", 1999);
  addBookToLibrary(Book3);
}

function summonElement() {
  myLibrary.forEach((element) => {
    element.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}

displayPresetBooks(myLibrary);
console.log(myLibrary);

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
  newBook = new Book(`${myLibrary.length}`, "default", "default", "0");
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
// Personal: 3 box into an array
function removeInput() {
  inputBoxes.forEach((element) => {
    element.value = "";
  });
}
removeInput();
inputBoxes.forEach((eachInput) => {
  eachInput.addEventListener("change", (e) => {
    newBook[eachInput.id] = eachInput.value;
  });
});

favDialog.addEventListener("close", (e) => {
  // this is remove the book
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  favDialog.close();
  myLibrary.push(newBook);
  addBook(newBook);
  console.log(myLibrary.pop());
  removeInput();
});
