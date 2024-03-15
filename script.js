const bookshelf = document.querySelector(".bookshelf");
let myLibrary = [];
let id = 0;
function Book(title, author, noOfPage) {
  this.id = id++;
  this.title = title;
  this.author = author;
  this.noOfPage = noOfPage;
  this.addObject = function (newBook) {
    this.object = newBook;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

// this is the preset of the library
function displayPresetBooks() {
  for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    addBook(element);
  }
}
function addBook(book) {
  let cubby = document.createElement("div");

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "remove";
  removeBtn.addEventListener("click", removeBook);
  cubby.appendChild(removeBtn);

  let titleP = document.createElement("p");
  titleP.innerText = `${book.title}`;
  cubby.appendChild(titleP);

  book.addObject(cubby);
  cubby.classList = "book";
  bookshelf.appendChild(cubby);
}

/*
  the idea is that the my library need a connection with the book on the display
*/
for (let index = 0; index < 1; index++) {
  const Book1 = new Book("Philosopher's Stone", "James", 2002);
  addBookToLibrary(Book1);
  const Book2 = new Book("Chamber of Secrets", "Patricia", 1982);
  addBookToLibrary(Book2);
  const Book3 = new Book("Prisoner of Azkaban", "Jennifer", 1999);
  addBookToLibrary(Book3);
  const Book4 = new Book("Goblet of Fire", "JJK", 2000);
  addBookToLibrary(Book4);
}
function removeFromMyLibrary(element) {
  const index = myLibrary.indexOf(element);
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
}
function removeBook(e) {
  let parent = e.target.closest("div");
  removeFromMyLibrary(parent);
  parent.remove();
}

// ================
let inputBoxes = [];
let newBook;
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");

const selectTitle = favDialog.querySelector("#title");
const selectAuthor = favDialog.querySelector("#author");
const selectNoOfPage = favDialog.querySelector("#noOfPage");
const readOrNot = favDialog.querySelector("read");

const confirmBtn = favDialog.querySelector("#confirmBtn");

inputBoxes.push(selectTitle, selectAuthor, selectNoOfPage);

showButton.addEventListener("click", () => {
  newBook = new Book("default", "default", "0");
  favDialog.showModal();
});

favDialog.addEventListener("close", (e) => {
  newBook = new Book("default", "default", "0");
});

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

function checkValidBook(newBook) {
  return !(
    newBook.title == "default" ||
    newBook.author === "default" ||
    newBook.noOfPage == 0
  );
}

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (checkValidBook(newBook)) {
    myLibrary.push(newBook);
    addBook(newBook);
    removeInput();
    favDialog.close();
  } else {
  }
});

displayPresetBooks(myLibrary);
