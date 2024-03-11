const bookshelf = document.querySelector(".bookshelf");
const myLibrary = [];

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

function displayBooks(myLibrary) {
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
let bookInformation = [];

const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectTitle = favDialog.querySelector("#title");
const selectAuthor = favDialog.querySelector("#author");
const selectNoOfPage = favDialog.querySelector("#noOfPage");
bookInformation.push(selectTitle);
bookInformation.push(selectAuthor);
bookInformation.push(selectNoOfPage);
console.log(bookInformation);
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
// Personal: 3 box into an array

bookInformation.forEach((eachInput) => {
  eachInput.addEventListener("change", (e) => {});
});
// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close(selectEl.value); // Have to send the select box value here.
});
