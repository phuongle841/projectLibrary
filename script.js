const bookshelf = document.querySelector(".bookshelf");
let myLibrary = [];
let id = 0;

function Book(title, author, noOfPage, status) {
  this.id = id++;
  this.title = title;
  this.author = author;
  this.noOfPage = noOfPage;
  this.status = status;
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

  let titleP = document.createElement("p");
  titleP.innerText = `${book.title}`;
  cubby.appendChild(titleP);

  let authorP = document.createElement("p");
  authorP.innerText = `${book.author}`;
  cubby.appendChild(authorP);

  let informBox = document.createElement("div");
  let noOfPageP = document.createElement("p");
  noOfPageP.innerText = `Release: ${book.noOfPage}`;
  informBox.appendChild(noOfPageP);

  let statusP = document.createElement("p");
  statusP.addEventListener("click", () => {
    if (book.status == "unfinished") {
      book.status = "finished";
    } else {
      book.status = "unfinished";
    }
    statusP.innerText = `Status: ${book.status}`;
  });

  statusP.innerText = `Status: ${book.status}`;
  informBox.appendChild(statusP);
  informBox.classList.add("boxInform");
  cubby.appendChild(informBox);

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "remove";
  removeBtn.addEventListener("click", removeBook);
  cubby.appendChild(removeBtn);

  book.addObject(cubby);
  cubby.classList = "book";
  bookshelf.appendChild(cubby);
}
function callPreset() {
  for (let index = 0; index < 1; index++) {
    const Book1 = new Book(
      "Philosopher's Stone",
      "J. K. Rowling",
      2002,
      "finished"
    );
    addBookToLibrary(Book1);
    const Book2 = new Book(
      "Chamber of Secrets",
      "J. K. Rowling",
      1982,
      "finished"
    );
    addBookToLibrary(Book2);
    const Book3 = new Book(
      "Prisoner of Azkaban",
      "J. K. Rowling",
      1999,
      "finished"
    );
    addBookToLibrary(Book3);
    const Book4 = new Book(
      "Goblet of Fire",
      "J. K. Rowling",
      2000,
      "unfinished"
    );
    addBookToLibrary(Book4);
    const Book5 = new Book(
      "Order of the Phoenix",
      "J. K. Rowling",
      2000,
      "unfinished"
    );
    addBookToLibrary(Book5);
    const Book6 = new Book(
      "Half-Blood Prince",
      "J. K. Rowling",
      2000,
      "unfinished"
    );
    addBookToLibrary(Book6);
    const Book7 = new Book(
      "Deathly Hallows",
      "J. K. Rowling",
      2000,
      "unfinished"
    );
    addBookToLibrary(Book7);
  }
}

function removeFromMyLibrary(index) {
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
}

function removeBook(e) {
  let parent = e.target.closest("div");
  for (let index = 0; index < myLibrary.length; index++) {
    const element = myLibrary[index];
    if (parent === element.object) {
      removeFromMyLibrary(index);
    }
  }
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
const selectStatus = favDialog.querySelector("#read");
selectStatus.addEventListener("change", (e) => {
  console.log(selectStatus.checked);
  if (selectStatus.checked) {
    newBook.status = "finished";
  } else {
    newBook.status = "unfinished";
  }
});

const confirmBtn = favDialog.querySelector("#confirmBtn");

inputBoxes.push(selectTitle, selectAuthor, selectNoOfPage);

showButton.addEventListener("click", () => {
  newBook = new Book("default", "default", "0", "unfinished");
  favDialog.showModal();
});

favDialog.addEventListener("close", (e) => {
  newBook = new Book("default", "default", "0", "unfinished");
});

function removeInput() {
  inputBoxes.forEach((element) => {
    element.value = "";
  });
}
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
  }
});
callPreset();
displayPresetBooks(myLibrary);
